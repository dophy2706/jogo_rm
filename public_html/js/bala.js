class Bala {
    constructor(x, y, r, a, c_f, c_b) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.a = a;
        this.c_f = c_f;
        this.c_b = c_b;
    }

    dibujo(context) {
        context.beginPath();
        context.fillStyle = this.c_f;
        context.strokeStyle = this.c_b;
        context.arc(this.x, this.y, this.r, this.a, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.closePath();
    }

    disparar(width, height ){
        this.x = width;
        
        
            
            console.log(this.y);
           for (let index = 0; index < 70; index++) {
            this.y--;
           }
            
            if(this.y < 0){
                this.x = width;
                console.log(this.y);
                this.y = Math.random()*height;    
                
            }
          
    }
}