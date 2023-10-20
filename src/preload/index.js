import path from 'path';

const { contextBridge } = require('electron')
const isDevelopment = process.env.NODE_ENV === 'development'

contextBridge.exposeInMainWorld('api', {
  getRsPath() {
    let rsPath = ''
    if (isDevelopment) {
      rsPath = path.join(process.cwd(), '/resources')
    } else {
      rsPath = path.join(process.cwd(), '/resources/app.asar.unpacked/resources')
    }
    if(process.platform === 'win32') {
      rsPath = rsPath.replaceAll("\\", "/");
    }
    return rsPath;
  }
})

contextBridge.exposeInMainWorld('sysInfo', {
  platform: process.platform,
  node: process.versions.node,
  chrome: process.versions.chrome,
  electron: process.versions.electron,
  env: process.env.NODE_ENV,
})
