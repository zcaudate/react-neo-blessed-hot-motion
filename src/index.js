import React from 'react';
import blessed from 'neo-blessed';
import { createBlessedRenderer } from 'react-blessed';
import App from './components/App';

const render = createBlessedRenderer(blessed);

// Create our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'React Blessed'
});

// Let user quit the app
screen.key(['escape', 'C-q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Render React component into screen
render(<App />, screen);

// Don't overwrite the screen
//console.log = function () { };
//// console.warn = function () { };
//console.error = function () { };
//console.info = function () { };
//console.debug = function () { };

// Listen to SIGUSR2 indicating hot updates:

// This is dumb but I don't understand how else to prevent process from exiting.
// If it exits, it will get restarted by nodemon, but then hot reloading won't work.
setInterval(() => {}, 1000);
