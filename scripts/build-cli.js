/*eslint-disable no-console*/
const build = require('./build');

const FORMATS = [
  '--format=iife',
  '--format=amd',
  '--format=cjs',
  '--format=umd'
];

const args = process.argv
  .slice(2)
  .reduce((accum, val) => {
    accum[val] = true;
    return accum;
  }, {});

const format = FORMATS.reduce((final, key) => {
  if (args[key]) {
    return key.split('=')[1];
  }
  return final;
}, 'cjs');

console.log('target format:', format);

build({
  babel: args['--babel'],
  format: format
});
