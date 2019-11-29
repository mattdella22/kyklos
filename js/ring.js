class Ring {
    constructor(r, angle) {
        this.pathHistory = [];
        this.r = r;
        this.angle = angle;
        this.current = createVector();
    }


    update() {
        this.x = this.r  * cos(this.angle);
        this.y = this.r * sin(this.angle);

        this.current.x = this.x;
        this.current.y = this.y;

        this.pathHistory.push(this.current);
    }

    show() {
        //strokeWeight(5);
        stroke(255, 255, 255);
        strokeWeight(6)
        //fill(255,255,255,180);
        noFill();
        beginShape();
        for (let v of this.pathHistory) {
            vertex(v.x, v.y)
        }
        endShape();
        this.current = createVector(); //perchè non funziona, senza questa linea?
    }


    rotate(reduce) {
        this.angle += 0.3*reduce;
    }

    erase(gamma) {
        let newGamma = map(gamma, -90, 90, -20, 10)
        if (this.pathHistory.length > 20 + newGamma) {//è errato?
            this.pathHistory.shift();
        }
    }

}