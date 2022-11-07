// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const { createWindow } = require('./window.js');

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

require('./ipcHandler.js');
