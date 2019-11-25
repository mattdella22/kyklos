let vectors = [];
let erasers = [];
let nrOfelements = 50;
let rotation;
let rCounter = 0;
deletingStarted = false;
let alpha = 0;
let beta = 0;
let gamma = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', onOrientationChange);
    }

    for (let i = 0; i < nrOfelements; i++) {
        vectors[i] = createVector(0, -25 - i * 4);
    }

    for (let i = 0; i < nrOfelements; i++) {
        erasers[i] = createVector(0, -25 - i * 4);
    }

    background(0);
    noStroke()
    rotation = radians(0.6);
}

function draw() {
    //DEBUG
    let txt = "alpha = " + alpha;

    translate(width / 2, height / 2);


    for (let i = 0; i < vectors.length; i++) {
        noStroke();
        //fill(60+i*2, 0+i*10, 120-i*4, 150 - i * 2);
        fill(255, 255, 255, 200);
        ellipse(vectors[i].x, vectors[i].y, 3, 3);
        vectors[i].rotate(rotation);
    }

    if (rCounter > radians(270)) {
        for (let i = 0; i < erasers.length; i++) {
            noStroke();
            //fill(60+i*2, 0+i*10, 120-i*4, 150 - i * 2);
            fill(0, 0, 0, 255);
            ellipse(erasers[i].x, erasers[i].y, 4, 4);
            erasers[i].rotate(rotation);
        }
    }


    /*
        for (let i = 0; i < vectors.length; i++) {
            
        }   
        */

    rCounter = rCounter + rotation;


    /*
        if (rCounter < radians(360-1)) {
            rCounter = rCounter + rotation;
            for (let i = 0; i < vectors.length; i++) {
                vectors[i].rotate(rotation);
            }
        } 
    */

    debug(txt);
}

function debug(val) {
    document.querySelector("#debug").textContent = "Debug : " + val;
}

function onOrientationChange(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;

}