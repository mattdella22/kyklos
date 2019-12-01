let rings = [];
var alpha = 0; // Orientation around Z axis
var beta = 0; // Orientation around X axis
var gamma = 0; // Orientation around Y axis
let start = false;
let factor = 1.2

function setup() {
    createCanvas(windowWidth, windowHeight);


    for (let i = 0; i < 15; i++) {
        //rings[i] = new Ring(11 + i * 18, i * 0.1414)
        rings[i] = new Ring(11 + i * 19, -HALF_PI)
    }

    background(0);
}

function draw() { 
    translate(width / 2, height / 2);
    //gamma = gamma -180;
    let newGamma = map(gamma, -90, 90, -0.5, 0.5); 
    

    if (touches.length > 0) {
        factor = factor + 0.1;
        background(0, 0, 0, 15 * factor * 0.05)
        scale(1 - factor * 0.009)
        for (let i = 0; i < rings.length; i++) {
            rings[i].restart();
            //rings[i].angle = -HALF_PI
            //rings[i].rotate(newGamma/factor*0.3);
            //rings[i].rotate(-HALF_PI);
            rings[i].update();
            rings[i].erase(newGamma);
            rings[i].show();

        }


    } else {
        factor = 1.2;
        background(0, 0, 0, 40);
        scale(1);
        for (let i = 0; i < rings.length; i++) {
            rings[i].rotate(i*0.31* newGamma);
            rings[i].update();
            rings[i].erase(gamma);
            rings[i].show();

        }
    }



    /*
    alpha = alpha-45;//tolgo 45 gradi ad alpha, per fare cominciare lo 0 prima...
    let constrainAlpha = constrain(alpha, 0, 90);
    let newAlpha = map(constrainAlpha, 0, 90, 0, 50);
    */


    



    //DEBUG
    let txt = "rings[0].current =" + rings[0].current;
    txt += "<br> acceleration z =";

    debug(txt);
}



function giveMeR() {
    let lastR = rings[rings.length - 1].r;
    return lastR;
}

function giveMeActualAngle() {
    let lastAngle = rings[rings.length - 1].angle;
    return lastAngle;
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