const { app, BrowserWindow } = require('electron')
const debug = require('electron-debug');
const path = require('path')

debug({showDevTools: true})

function createWindow () {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            nodeIntegration:true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    if (process.env.dev == 1) {
        win.loadURL('http://localhost:3000').then()
    }else {
        win.loadFile('build/index.html').then()
    }
}

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

