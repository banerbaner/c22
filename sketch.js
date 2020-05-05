
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;
var gSlider;

var gravityInput;


function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity.y, gSlider.min, gSlider.max, 0, 1);

    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, height - 50, width, 10, options);
    World.add(world, ground);
}



function draw() {


    background(51);
    gravityInput = gSlider.value();
    engine.world.gravity.y = (gravityInput - 50) / 10;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    noStroke();
    fill(170);
    strokeWeight(4);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 10);
    fill(255);
    textSize(15);
    text("Gravity " + engine.world.gravity.y, 170, 381);
    console.log("Gravity: " + engine.world.gravity.y)
}

function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40), random(0, 255)));
    }
}