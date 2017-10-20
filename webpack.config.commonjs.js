const path = require('path');
const config = require('./webpack.config.es2015');

config.entry = './out-commonjs/src/main.js';
config.output.path = path.resolve(__dirname, './dist-commonjs');

module.exports = config;
