class Ring {
    constructor(r, angle) {
        this.pathHistory = [];
        this.r = r;
        this.angle = angle;
        this.current = createVector();
    }

    update() {
    	//prima di aggiornare inserisco nella storia, il punto
    	//console.log(this.pathHistory[0]);

        this.x = this.r * cos(this.angle);
        this.y = this.r * sin(this.angle);

        this.current.x = this.x;
        this.current.y = this.y;

    	this.pathHistory.push(this.current);
    }

    show() {
        //strokeWeight(5);
        stroke(255,255,255);
        strokeWeight(2)
        //fill(255,255,255,180);
        noFill();
        beginShape();
        for(let v of this.pathHistory){
            vertex(v.x, v.y)
        }
        endShape();
        this.current = createVector();
    }


    rotate() {
        this.angle += 0.05;
    }

    erase(){
    	//Cancello dall'history i punti partendo dal fondo (pathHistory[pathHistory.lenght])
    	//"rompo"la forma all'ultimo punto, così che avrò sempre una linea aperta...
        if(this.angle > radians(270)){
            this.pathHistory.shift();
        }
    }

}