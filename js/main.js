let rings = [];
var alpha = 0; // Orientation around Z axis
var beta = 0; // Orientation around X axis
var gamma = 0; // Orientation around Y axis
let start = false;
let factor = 1.2

function setup() {
    createCanvas(windowWidth, windowHeight);


    for (let i = 0; i < 13; i++) {
        rings[i] = new Ring(11 + i * 18, i * 0.1414)
    }

    background(0);
}

function draw() {
    if (touches.length>0) {
        background(0, 0, 0, 15 / factor)
        factor = factor * 2.4;
    } else {
        background(0, 0, 0, 40);
    }

    translate(width / 2, height / 2);

    scale(1);

    /*
    alpha = alpha-45;//tolgo 45 gradi ad alpha, per fare cominciare lo 0 prima...
    let constrainAlpha = constrain(alpha, 0, 90);
    let newAlpha = map(constrainAlpha, 0, 90, 0, 50);
    */


    //let newGamma = map(gamma, -90, 90, -20, 52);


    for (let i = 0; i < rings.length; i++) {
        rings[i].rotate();
        rings[i].update(-i * 0.1414);
        rings[i].erase();
        rings[i].show();

    }

    //DEBUG
    let txt = "rings[0].current =" + rings[0].current;
    txt += "<br> acceleration z =" ;

    debug(txt);
}

function debug(val) {
    document.querySelector("#debug").innerHTML = "Debug : <br>" + val;
}

window.addEventListener("deviceorientation", function(event) {
    alpha = event.alpha;
    beta = event.beta - 45;
    gamma = event.gamma;
});


function touchStarted(event) {
    console.log(event);

}

document.ontouchmove = function(e) {
    e.preventDefault();
}
document.ontouchmove = function(e) {
    e.preventDefault();
}