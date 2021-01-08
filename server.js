const config = require('./webpack.config.js');
const webpack = require('webpack');
const path = require('path');
const nodemon = require('nodemon');

var running = false;
webpack(config).watch(200, function(err, stats) {
  if (!running) {
    running = true;
    nodemon({
      execMap: {
        js: 'node'
      },
      script: path.join(__dirname, 'build', 'backend'),
      ignore: ['*'],
      watch: [],
      ext: 'noop'
    });
  }

  // There's a trick here. Restart will just send SIGUSR2 to our process.
  // src/signal.js will intercept it and handle hot update instead of restarting.

  nodemon.restart();
});