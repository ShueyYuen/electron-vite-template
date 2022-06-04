import os from 'os';
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel: string, data: any) => {
    ipcRenderer.send(channel, data);
  },
  receive: (channel: string, func: (arg0: Electron.IpcRendererEvent, arg1: any) => void) => {
    ipcRenderer.on(channel, (event, ...args: any) => func(event, args));
  },
  invoke: (channel: string, func: (arg0: any) => void, ...args: any) => {
    ipcRenderer.invoke(channel, ...args).then((result) => {
      func(result);
    });
  }
});

contextBridge.exposeInMainWorld('electronAPI', {
  platform: os.platform(),
});
