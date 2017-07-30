/*eslint-disable no-console*/
const rollup = require('rollup');
const fs = require('fs');
const babel = require('babel-core');

function bundler(config, bundlerOpt = {}) {
  let bundler = rollup.rollup(config)
    .then(bundle => bundle.write(config));

  if (bundlerOpt.babel) {
    bundler = bundler
      .then(() => babel.transformFileSync(config.dest, {}))
      .then((result) => fs.writeFileSync(config.dest, result.code))
  }

  bundler.catch(e => console.error(e));
}

module.exports = bundler;
