const path = require('path');
const { app, BrowserWindow } = require('electron');

const isMac = process.platform === 'darwin';

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'K & A Cool Engineers Air Conditions',
        width: 500,
        height: 600
    });

    mainWindow.loadFile(path.join(__dirname, './app/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    })
});

app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
})