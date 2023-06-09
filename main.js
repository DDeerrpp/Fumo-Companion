const { app, BrowserWindow } = require('electron')
const path = require("path")


const createWindow = () => {
    const win = new BrowserWindow({
        icon: path.join('./assets/icons/win', "/icon.ico"),
        width: 350,
        height: 300,
        frame: false,
        resizable: false,
        transparent: true,
        show: false,
    })
    win.on("ready-to-show", win.show);
    // win.webContents.openDevTools(); //for checking errors
    win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
    win.setAlwaysOnTop(true, "floating");
    win.setFullScreenable(false);
    // Below statement completes the flow
    win.moveTop();
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
    
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
    
})