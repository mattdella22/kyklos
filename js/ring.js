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
        stroke(255, 0, 0);
        beginShape();
        for(let i = 0; i < this.pathHistory.length; i++){
        	vertex(this.pathHistory[i].x, this.pathHistory[i].y)
        }
        endShape();
    }


    rotate() {
        this.angle += 0.05;
    }

    erase(){
    	//Cancello dall'history i punti partendo dal fondo (pathHistory[pathHistory.lenght])
    	//"rompo"la forma all'ultimo punto, così che avrò sempre una linea aperta...
    }

}