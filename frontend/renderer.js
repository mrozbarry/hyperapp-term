/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

import { app } from '../node_modules/hyperapp/index.js';
import { view } from './view/index.js';
import { initialState } from './actions.js';

app({
  init: initialState(),

  view: view,

  node: document.querySelector('main'),
});

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     window.electronAPI.sendCommand("home", "tacos")
//     alert('success')
// })
