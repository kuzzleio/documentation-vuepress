const path = require('path');
const { endsWith, defaultsDeep } = require('lodash');
const { writeFileSync } = require('fs');

const fixes = {};
const defaultDumpFile = './frontmatter-fixes.json';
const codeRE = /api-reference|plugin-context|controllers|core-classes|virtual-classes|sdk\/.*\/protocols|core-structs|sdk\/.*\/classes/;

module.exports = (options, ctx) => ({
  name: 'frontmatter-fix-tool',
  ready() {
    const { pages } = ctx;
    const rootNodes = pages.filter(p => p.frontmatter.type === 'root');

    rootNodes.forEach(root => {
      const children = getChildren(root, pages);
      computeFixes(children, pages);
    });

    writeFileSync(
      options.dumpFile || defaultDumpFile,
      JSON.stringify(fixes, null, 2)
    );
  }
});

function computeFixes(children, nodes) {
  children.forEach(child => {
    const grandChildren = getChildren(child, nodes);
    const fix = {};
    if (codeRE.test(child.path) && child.frontmatter.code !== true) {
      fix.code = true;
    } else {
      fix.code = false;
    }
    if (grandChildren.length) {
      // node is branch
      if (
        child.frontmatter.type !== 'branch' &&
        child.frontmatter.type !== 'root'
      ) {
        fix.type = 'branch';
      }
    } else {
      // node is page
      if (child.frontmatter.type !== 'page') {
        fix.type = 'page';
      }
    }
    fixes[child.path] = defaultsDeep(fix, child.frontmatter);
    if (grandChildren.length) {
      computeFixes(grandChildren, nodes);
    }
  });
}

function getChildren(node, nodes) {
  const pathRE = new RegExp(`^${getNodeDirectory(node)}[a-zA-z_0-9\-]+/?$`);
  return nodes.filter(p => p.path.match(pathRE) && p.path !== node.path);
}

function getNodeDirectory(node) {
  if (endsWith(node.path, '/')) {
    return node.path;
  } else {
    return path.parse(node.path).dir;
  }
}
