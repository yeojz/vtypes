/*eslint-disable no-console*/
const chokidar = require('chokidar');
const path = require('path');
const PACKAGE_DIR = path.resolve(__dirname, '..', 'packages');
const build = require('./build');

const opt = {
  persistent: true
}

const files = [
  path.join(PACKAGE_DIR, '*', 'src', '*.js')
];

const onChange = (path) => {
  if (path.indexOf('.spec.js') > -1) {
    console.log('skipping... spec');
    return;
  }

  build({babel: true});
}

chokidar.watch(files, opt)
  .on('ready', () => console.log('watching...'))
  .on('change', onChange);
