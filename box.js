function Box(x, y, w, h, color) {
    var options = {
        friction: 0.5,
        restitution: 0.5,
    }

    var color;

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(color);
        rect(0, 0, this.w, this.h);
        pop();
    }
}