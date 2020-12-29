function MovingObject(option){
    this.pos = option.pos; //option.pos === the value of the pos 
    this.vel = option.vel;
    this.radius = option.radius;
    this.color = option.color;
}

MovingObject.prototype.draw = function draw(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
}

module.exports = MovingObject;