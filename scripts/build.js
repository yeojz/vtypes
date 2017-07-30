/*eslint-disable no-console*/
const bundler = require('./bundler');
const path = require('path');
const nodeResolve = require('rollup-plugin-node-resolve');
const alias = require('rollup-plugin-alias');
const pkglist = require('../pkglist');
const lerna = require('../lerna');

const PACKAGE_DIR = path.resolve(__dirname, '..', 'packages');

const ALIASES = pkglist.packages.reduce((accum, name) => {
  accum[name] = path.join(PACKAGE_DIR, name, 'src', 'index.js');
  return accum;
}, {});

function build(bundlerOpt) {

  pkglist.packages.forEach(pkg => {
    console.log('building...', pkg);

    let config = {
      banner: `/**\n * ${pkg}\n * @version: ${lerna.version}\n **/`,
      format: bundlerOpt.format,
      entry: path.join(PACKAGE_DIR, pkg, 'src', 'index.js'),
      dest: path.join(PACKAGE_DIR, pkg, 'index.js'),
      external: ['validate.js'],
      plugins: [
        alias(ALIASES),
        nodeResolve()
      ]
    };

    if (config.format !== 'cjs') {
      config.moduleName = pkg.replace('-', '.'),
      config.globals = {
        'validate.js': 'validate'
      };
    }

    bundler(config, bundlerOpt);
  });
}

module.exports = build;
