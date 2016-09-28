const electron = require("electron");
const {app, BrowserWindow, Menu} = electron

colors = {
    orange : "#F49406",
    green0 : "#ECEFE6",
    green1 : "#C5DABB",
    green2 : "#ADCAAC",
    green3 : "#93B59A",
    green4 : "#749988",
    green5 : "#699371",
    green6 : "#466154"
}

mainwindow = {
    width:640, 
    height:480, 
    title: "NPQ",
    frame: true,
    titleBarStyle: "hidden",
    devTools: false,
    show: false,
    resizable: false, 
    backgroundColor: colors.green3
}

let win;

app.on("ready", () => {
    win = new BrowserWindow(mainwindow);
    win.loadURL(`file://${__dirname}/index.html`);

    const template = [{
        label: "Edit",
        submenu: [
            {
                role: "undo"
            },
            {
                role: "redo"
            },
            {
                type: "separator"
            },
            {
                role: "cut"
            }
        ]
    }]
    const menu = Menu.buildFromTemplate(template);
    // Menu.setApplicationMenu(menu);

    win.once("ready-to-show", () => {
        win.show();
    });
});

app.on("window-all-closed", () => {
    app.quit();
});

exports.openWindow = () => {
    let childwin = new BrowserWindow({width: 630, height: 891, parent: win});
    childwin.loadURL(`file://${__dirname}/bear.html`);
}

exports.selfClose = () => {
    win.close();
}