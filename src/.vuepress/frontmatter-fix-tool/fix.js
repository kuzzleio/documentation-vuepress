const program = require('commander');
const path = require('path');
const fs = require('fs');

program
  .version('1.0.0')
  .description('Applies the fixes from file to the repo')
  .usage('<file ...>')
  .parse(process.argv);

const fixesFileArg = process.argv[2];

if (!fixesFileArg) {
  program.help();
  throw new Error('You must provide the path to a fix file.');
}

const fixesFilePath = path.resolve(process.cwd(), fixesFileArg);

console.log(`Resolved file path: ${fixesFilePath}`);

const fixes = require(fixesFilePath);

console.log(`Found ${Object.keys(fixes).length} fixes.`);

Object.keys(fixes).forEach(url => {
  const newFrontmatter = fixes[url];
  const filePath = path.resolve(
    process.cwd(),
    url.replace(/^\//, ''),
    'index.md'
  );
  const fileBlob = fs.readFileSync(filePath);
  console.log(`Fixing ${url}...`);
  const fileContents = fileBlob.toString();
  const fileContentsFixed = fileContents.replace(
    /^---$\n(^.*$\n)*^---$/m,
    renderFrontmatter(newFrontmatter)
  );
  fs.writeFileSync(filePath, fileContentsFixed);
});

function renderFrontmatter(frontmatter) {
  let render = '---\n';
  Object.keys(frontmatter).forEach(k => {
    render += `${k}: ${frontmatter[k]}\n`;
  });
  render += '---';
  return render;
}
