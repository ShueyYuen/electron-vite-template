import { IpcRenderer } from "electron/renderer";
import * as vue from 'vue';

export interface IElectronAPI {
  platform: string;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
    ipcRenderer: IpcRenderer;
  }
}

declare module 'vue' {
  interface HTMLAttributes {
    dataEvent?: string;
  }
}
