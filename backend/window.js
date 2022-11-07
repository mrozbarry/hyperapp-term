// Modules to control application life and create native browser window
const { BrowserWindow } = require('electron');
const path = require('path');

const frontendPath = path.join(__dirname, '..', 'frontend');

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1000,
    webPreferences: {
        preload: path.join(frontendPath, 'glue', 'preload.js'),
        nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(frontendPath, 'index.html'))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
};

module.exports = {
  createWindow,
};
