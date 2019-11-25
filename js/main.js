let ring;


function setup() {
    createCanvas(windowWidth, windowHeight);
    ring = new Ring(55, 0);

    background(0);
    frameRate(2);
}

function draw() {
    //DEBUG
    let txt = "ring.current =" + ring.current;
    txt += "<br> ring.angle =" + ring.angle; 
    txt += "<br>ring.pathHistory.length =" + ring.pathHistory.length + "\n"; 
    txt += "<br>ring.pathHistory[0] =" + ring.pathHistory[0] + "\n"; 

    translate(width / 2, height / 2);

    ring.rotate();
    ring.update();
    ring.show();


    debug(txt);
}

function debug(val) {
    document.querySelector("#debug").innerHTML = "Debug : <br>" + val;
}
