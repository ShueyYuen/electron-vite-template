import { app, BrowserWindow, ipcMain, IpcMainEvent } from 'electron';
import path from 'path';

const createWindow = () => {
  const win = new BrowserWindow({
    frame: false,
    icon: 'src/../electron/icons/logo.ico',
    // transparent: true,
    webPreferences: {
      nodeIntegration: !!process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, '../electron-preload/preload.js'),
    },
  });

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, '../index.html'));
  } else {
    // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
    const url = `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`;
    console.log(url);
    win.loadURL(url);
  }

  ipcMain.on('window-operation', (event: IpcMainEvent, arg) => {
    switch(arg.data) {
      case 'close':
        win.close();
        break;
      case 'min':
        win.minimize();
        break;
      case 'max':
        win.isMaximized() ? win.unmaximize() : win.maximize();
        break;
    }
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
