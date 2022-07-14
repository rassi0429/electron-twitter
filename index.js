const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 380, height: 1000, alwaysOnTop: true });
  mainWindow.loadURL('https://twitter.com');
  mainWindow.setTitle("twitter");
  mainWindow.setPosition(-380, 20);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  var b = 0;
  setInterval(function () {
    // get the mouse position
    let mousePos = electron.screen.getCursorScreenPoint();
    console.log(mousePos);
    if (mousePos.x < 5) {
      mainWindow.setPosition(0, 20);
      b = 1;
    }
    else {
      if (b == 1 && mousePos.x < 500) {

      }
      else {
        mainWindow.setPosition(-380, 20);
      }
    }
  }, 1000);

});

