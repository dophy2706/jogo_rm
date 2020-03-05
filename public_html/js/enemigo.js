class Enemigo {

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

    mover_abajo(width, height) {

        this.y++;

        if (this.y > height) {
            this.y = 0;
            this.x = Math.random() * (width);
        }
    }

    matar(width, height) {

        this.y = 0;
        this.x = Math.random() * (width);
    }
}