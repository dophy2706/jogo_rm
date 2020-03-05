class Player {
    constructor(x, y, radio, ang, c_f, c_b) {

        this.x = x;
        this.y = y;
        this.radio = radio;
        this.ang = ang;
        this.c_f = c_f;
        this.c_b = c_b;
    }

    dibujo(context) {

        // Dibujando el círculo principal
        context.beginPath();
        context.fillStyle = this.c_f;
        context.lineWidth = 2;
        context.strokeStyle = this.c_b;
        context.arc(this.x, this.y, this.radio, this.ang, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.closePath();

        // Dibujando el ojo izq. 
        context.beginPath();
        context.fillStyle = this.c_b;
        context.arc(this.x + 10, this.y - 5, 5, 0, 2 * Math.PI);
        context.fill();
        context.closePath();

        // Dibujando el ojo derecho
        context.beginPath();
        context.fillStyle = this.c_b;
        context.arc(this.x - 15, this.y - 5, 5, 0, 2 * Math.PI);
        context.fill();
        context.closePath();

        // Dibujo de la Boca
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.arc(this.x, this.y - 2, this.radio - 5, 0, (Math.PI / 180) * 180);
        context.stroke();
        context.closePath();
    }

    // Metodo de movimiento entre derecha e izq. del muñeco
    mover(key) {

        if (key == 39 && this.x + this.radio < 800) {
            this.x = this.x + 4;
        }

        if (key == 37 && this.x + this.radio > 65) {
            this.x = this.x - 4;
        }
    }
}