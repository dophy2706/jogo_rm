class Bala {

    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;

    }

    dibujo(context) {

        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.x, this.y, this.w, this.h);
        context.fill();
        context.stroke();
        context.closePath();
    }

    disparar(width, height) {

        this.x = width;
        //this.y -=10;

        for (let index = 0; index < 20; index++) {
            //console.log("y de la bala: " + this.y);
            this.y--;
        }

        if (this.y < 0) {
            this.y = height;
            this.x = width;
        }
    }
}