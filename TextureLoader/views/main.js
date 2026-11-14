const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 900, height: 780, minWidth: 720, minHeight: 640, frame: false, backgroundColor: '#070b14',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true }
  });
  win.setMenu(null);
  win.loadFile('index.html');
}

function defaultFolder(game) {
  if (game === 'ROBLOX') {
    const lad = process.env.LOCALAPPDATA;
    if (!lad) return null;
    for (const name of ['Fishstrap', 'Bloxstrap']) {
      if (fs.existsSync(path.join(lad, name))) return path.join(lad, name, 'Modifications');
    }
    return null;
  }
  if (game === 'MINECRAFT') {
    if (process.platform === 'win32') return path.join(process.env.APPDATA, '.minecraft', 'resourcepacks');
    if (process.platform === 'darwin') return path.join(os.homedir(), 'Library/Application Support/minecraft/resourcepacks');
    return path.join(os.homedir(), '.minecraft', 'resourcepacks');
  }
  return null;
}

ipcMain.handle('default-folder', (_, game) => defaultFolder(game));
ipcMain.handle('pick-folder', async () => {
  const r = await dialog.showOpenDialog(win, { properties: ['openDirectory', 'createDirectory'] });
  return r.canceled ? null : r.filePaths[0];
});
ipcMain.handle('pick-files', async () => {
  const r = await dialog.showOpenDialog(win, { properties: ['openFile', 'multiSelections'] });
  return r.canceled ? [] : r.filePaths;
});
ipcMain.handle('copy-file', async (_, src, destDir) => {
  try {
    fs.mkdirSync(destDir, { recursive: true });
    await fs.promises.copyFile(src, path.join(destDir, path.basename(src)));
    return { ok: true };
  } catch (e) { return { ok: false, error: e.message }; }
});
ipcMain.handle('file-size', (_, p) => { try { return fs.statSync(p).size; } catch { return 0; } });
ipcMain.on('win', (_, a) => { if (a === 'min') win.minimize(); if (a === 'close') win.close(); });

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
