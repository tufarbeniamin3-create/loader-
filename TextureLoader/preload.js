const { contextBridge, ipcRenderer, webUtils } = require('electron');
contextBridge.exposeInMainWorld('api', {
  defaultFolder: g => ipcRenderer.invoke('default-folder', g),
  pickFolder: () => ipcRenderer.invoke('pick-folder'),
  pickFiles: () => ipcRenderer.invoke('pick-files'),
  copyFile: (s, d) => ipcRenderer.invoke('copy-file', s, d),
  fileSize: p => ipcRenderer.invoke('file-size', p),
  pathOf: f => webUtils.getPathForFile(f),
  win: a => ipcRenderer.send('win', a)
});
