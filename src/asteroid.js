const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js");

const Default = {
    color: "#FF7F50",
    radius: 20
}

function Asteroid(option){
    option.pos = randomPos();
    option.vel = randomVec();
    option.color = Default.color;
    option.radius = Default.radius;

    MovingObject.call(this, option)
}