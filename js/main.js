//mattia
let rings = [];


function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 25; i++) {
        rings[i] = new Ring(15 + i*4, 0)
    }

    background(0);
}

function draw() {
    background(0,0,0,40);
    //DEBUG
    /*
    let txt = "ring.current =" + ring.current;
    txt += "<br> ring.angle =" + ring.angle;
    txt += "<br>ring.pathHistory.length =" + ring.pathHistory.length + "\n";
    txt += "<br>ring.pathHistory[0] =" + ring.pathHistory[0] + "\n";
    */

    translate(width / 2, height / 2);
    scale(2);

    for (let i = 0; i < rings.length; i++) {
        rings[i].rotate();
        rings[i].update();
        rings[i].erase();
        rings[i].show();

    }


    //debug(txt);
}

function debug(val) {
    document.querySelector("#debug").innerHTML = "Debug : <br>" + val;
}