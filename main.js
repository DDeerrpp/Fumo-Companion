const { app, BrowserWindow, Tray, nativeImage } = require('electron')
const path = require("path")
let tray = null

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

const createSystemTray = () => {
    //specifically label out path to find the image, otherwise tray icon will be blank
    const iconPath = path.join(__dirname, 'assets', 'icons', 'win', "/icon.ico")
    tray = new Tray(nativeImage.createFromPath(iconPath))
    tray.setToolTip('Click to close')
    tray.on('click', () => {
        app.quit();
    })
}

app.whenReady().then(() => {
    createWindow();
    createSystemTray();
})
app.setLoginItemSettings({
    openAtLogin: true
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
    
})