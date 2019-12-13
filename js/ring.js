class Ring {
    constructor(r, angle) {
        this.pathHistory = [];
        this.r = r;
        this.angle = angle;
        this.current = createVector();
        //
        this.startingPoint = createVector(this.r * cos(this.angle), this.r * sin(this.angle));
    }


    update() {
        this.x = this.r * cos(this.angle);
        this.y = this.r * sin(this.angle);

        this.current.x = this.x;
        this.current.y = this.y;

        this.pathHistory.push(this.current);
    }

    show() {
        //strokeWeight(5);
        stroke(255, 255, 255);
        strokeWeight(12)
        //fill(255,255,255,180);
        noFill();
        beginShape();
        for (let v of this.pathHistory) {
            vertex(v.x, v.y)
        }
        endShape();
        this.current = createVector(); //perchè non funziona, senza questa linea?
    }


    rotate(delay) {
        //quando si raggiunge 360°, risettare a 0 l'angolo, per evitare di caricare l'angolo.
        if (this.angle >= radians(360)) {
            this.angle = 0;
        } else {
            this.angle += 0.1 * delay;
        }
    }

    restart() {
        //calcolo la distanza in base al vettore pos. originale --> prima ricavo i gradi θ = tan-1 ( y / x )

        let startingAngle = atan(this.startingPoint.x / this.startingPoint.y)
        let distance = this.angle - startingAngle;

        if (distance != 0) {
            this.angle = distance - distance * 0.05; //usando distance*0.005 mi assicuro che arrivo sempre a 0
        } else {
            this.angle = startingAngle;
        }

    }

    erase(gamma) {
        let newGamma = map(gamma, -90, 90, -20, 10)
        if (this.pathHistory.length > 20 + newGamma) { //è errato?
            this.pathHistory.shift();
        }
    }

}