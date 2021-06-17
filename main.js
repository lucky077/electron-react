const { app, BrowserWindow ,Menu, Tray } = require('electron')
const debug = require('electron-debug');
const path = require('path')
const express = require('express')
const expressApp = express()

debug({showDevTools: true})

expressApp.use(express.static('build'))
expressApp.get('/*', (req, res) => {
    let options = {
        root: __dirname,
        headers: {
        }
    }
    res.sendFile('build/index.html',options)
})

expressApp.listen(3001)

function createWindow () {

    const win = new BrowserWindow({
        title: '',//需要与html title一致
        width: 1600,
        height: 900,
        minWidth: 800,
        minHeight: 600,
        // frame: false,//无边框
        center: true,//初始居中v
        autoHideMenuBar: true,//隐藏菜单栏
        // alwaysOnTop : true,//窗口永远覆盖其他窗口
        // skipTaskbar: true,//任务栏显示
        webPreferences: {
            defaultEncoding: 'utf-8',
            nodeIntegration:true,
            enableRemoteModule: true,
            contextIsolation: false,
            allowRunningInsecureContent: true,
            webSecurity: false,
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    if (process.env.dev == 1) {
        win.loadURL('http://localhost:3000').then()
    }else {
        win.loadURL('http://localhost:3001').then()
    }
    return win
}

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
let tray = null
app.whenReady().then(() => {
    let win = createWindow();
    tray = new Tray('public/favicon.ico')
    const contextMenu = Menu.buildFromTemplate([
        { label: 'test', type: 'normal',click() {
            win.webContents.send("test","")}},
        { label: '退出', type: 'normal',click(){app.quit()}},
    ])
    tray.setToolTip('This is my application.')
    tray.setContextMenu(contextMenu)
    tray.on('click',() => win.isVisible() ? win.hide() : win.show())

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

