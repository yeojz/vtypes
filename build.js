/*eslint-disable no-console*/
const rollup = require('rollup');
const fs = require('fs');
const path = require('path');
const babel = require('babel-core');

const common = {
  format: 'cjs',
  external: [
    'validate.js'
  ]
};

function bundler(opt) {
  rollup
    .rollup(opt)
    .then(bundle => bundle.write(opt))
    .then(() => babel.transformFileSync(opt.dest, {}))
    .then((result) => fs.writeFileSync(opt.dest, result.code))
    .catch(e => console.error(e));
}

bundler(
  Object.assign({}, common, {
    entry: path.resolve(__dirname, './src/validators/index.js'),
    dest: path.resolve(__dirname, './validators.js')
  })
);

bundler(
  Object.assign({}, common, {
    entry: path.resolve(__dirname, './src/register.js'),
    dest: path.resolve(__dirname, './register.js')
  })
);
