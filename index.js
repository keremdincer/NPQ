const remote = require("electron").remote;
const main = remote.require("./main.js");

var button = document.createElement("button");
button.textContent = "Open Window";
button.addEventListener("click", () => {
    main.openWindow();
}, false)
document.body.appendChild(button);

var closeButton = document.createElement("button");
closeButton.textContent = "Close Current Window";
closeButton.addEventListener("click", () => {
    main.selfClose();
}, false);
document.body.appendChild(closeButton);