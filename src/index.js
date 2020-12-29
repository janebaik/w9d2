const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', function(){
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 500;
    canvasEl.height = 500
    const ctx = canvasEl.getContext('2d');
    window.ctx = ctx;
    // test
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [100, 100],
        radius: 50,
        color: "#00FF00"
    });

    mo.draw(ctx);


    // test
    mo.move();
    mo.draw(ctx);
});