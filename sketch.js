let x = 0;
let y = 0
let x_speed = 3;
let y_speed = 3;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
        
    stroke(255);
    strokeWeight(4);
    noFill();
    circle(x, y, 100); 

    if (x > width - 50) {
        x_speed = -3;
    } else if (x < 50 ) {
        x_speed = 3;
    }
    if (y > height - 50) {
        y_speed = -3
    } else if (y < 50) {
        y_speed = 3
    }
    x = x + x_speed;
    y = y + y_speed;
}





