console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
