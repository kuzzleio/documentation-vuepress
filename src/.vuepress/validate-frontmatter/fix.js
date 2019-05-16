const program = require('commander');
const path = require('path');
const { trimEnd, assign } = require('lodash');
const fs = require('fs');
const YAML = require('yaml');

const { diffLines } = require('diff');
const c = require('chalk');
const Confirm = require('prompt-confirm');

const frontmatterRE = /^---$\n(^[a-zA-Z0-9_\-]*:.*$\n)*\n?^---$/m;

program
  .version('1.0.0')
  .description('Applies the fixes from file to the repo')
  .usage('-e <error file>')
  .option('-e --errors <file>', 'A file containing the dumped errors')
  .option('-y --yes', 'Answer yes to all prompts')
  .parse(process.argv);

const errorOption = program.errors;
if (!errorOption) {
  program.help();
  throw new Error('You must provide the path to an error dump file.');
}

const errorFilePath = path.resolve(process.cwd(), errorOption);

console.log(`Resolved file path: ${errorFilePath}`);

const errors = require(errorFilePath);
console.log(`Found ${Object.keys(errors).length} errors.\n`);

fixErrors(errors).then(() => {
  process.exit();
});

async function fixErrors(errorsByPath) {
  for (const url of Object.keys(errorsByPath)) {
    const errors = errorsByPath[url];
    const filePath = path.resolve(
      process.cwd(),
      url.replace(/^\//, ''),
      'index.md'
    );
    const fileBlob = fs.readFileSync(filePath);
    console.log(`Preparing fixes for ${c.whiteBright(url)}...\n`);
    const fileContents = fileBlob.toString();
    const matches = fileContents.match(frontmatterRE);
    let frontmatterText;
    if (matches.length) {
      frontmatterText = matches[0];
    }
    frontmatterText = frontmatterText.replace(/^---$\n?/gm, '');
    let frontmatter = YAML.parse(frontmatterText);

    errors
      .filter(e => e.fix)
      .forEach(e => {
        frontmatter = fixError(e, frontmatter);
      });

    const fixedFrontmatterText = YAML.stringify(frontmatter);
    const fileContentsFixed = fileContents.replace(
      frontmatterRE,
      `---\n${fixedFrontmatterText}---`
    );
    const diff = diffLines(fileContents, fileContentsFixed);
    outputDiff(diff);
    let answer = program.yes;

    if (!answer) {
      const prompt = new Confirm('Proceed with fix?');
      answer = await prompt.run();
    }

    if (answer) {
      fs.writeFileSync(filePath, fileContentsFixed);
      console.log(c.blue('>> Fixed!\n'));
    } else {
      console.log(c.grey('>> Skipped!\n'));
    }
  }
}

function fixError(error, frontmatter) {
  switch (error.error) {
    case 'MISSING_KEY':
      return assign(error.fix, frontmatter);
      break;

    default:
      return frontmatter;
      break;
  }
}

function outputDiff(diff) {
  if (!diff.length) {
    console.log('Noting to fix');
    return;
  }
  diff.forEach(d => {
    const value = trimEnd(d.value, '\n');
    if (d.added) {
      return console.log(c.green(`${value.replace(/^/gm, '+ ')}`));
    }
    if (d.removed) {
      return console.log(c.red(`${value.replace(/^/gm, '- ')}`));
    }
    return console.log(c.grey(value.replace(/^/gm, '  ')));
  });
  console.log('');
}
