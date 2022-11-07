const { ipcMain } = require('electron');


ipcMain.on("command", (tacos, { directory, command }) => {
  console.log(directory, ' | ', command);
})
