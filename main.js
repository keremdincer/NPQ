const electron = require("electron");
const {app, BrowserWindow} = electron

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
    width:800, 
    height:600, 
    title: "NPQ",
    frame: false, 
    show: false, 
    backgroundColor: colors.green3
}

let win;

app.on("ready", () => {
    win = new BrowserWindow(mainwindow);
    win.loadURL(`file://${__dirname}/index.html`);
    win.once("ready-to-show", () => {
        win.show();
    });
});

app.on("window-all-closed", () => {
    app.quit();
});

exports.openWindow = () => {
    let childwin = new BrowserWindow({width: 400, height: 200, parent: win});
    childwin.loadURL(`file://${__dirname}/bear.html`);
}

exports.selfClose = () => {
    win.close();
}