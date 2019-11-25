let vectors = [];
let rotation;
let rCounter = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 70; i++) {
        vectors[i] = createVector(0, -25 - i * 4);
    }

    background(0);
    rotation = radians(0.6);
}

function draw() {
    translate(width / 2, height / 2);

    for (let i = 0; i < vectors.length; i++) {
        noStroke();
        fill(255, 255, 255, 40 + i * 2);
        ellipse(vectors[i].x, vectors[i].y, 3, 3);
    }

    fill(255, 0, 0);
    strokeWeight(4)
    point(0, 0, 5, 5);

    if (rCounter < radians(360-1)) {
        rCounter = rCounter + rotation;
        for (let i = 0; i < vectors.length; i++) {
            vectors[i].rotate(rotation);
        }
    } else{
        noLoop();
    }
}

/*
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
*/