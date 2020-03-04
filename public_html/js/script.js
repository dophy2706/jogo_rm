/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * Rodolfo Macedo - 2020-03-03
 */

var canvashtml = document.getElementById("Canvas"); // asignasión del elemento HTML CANVAS a una variable
var ctx = canvashtml.getContext("2d"); // creacion de variable ctx para asignar el ctxo de area de diseño ejemplo: 2d
var w = canvashtml.width;
var h = canvashtml.height;
var score = 0;
var key;

/*
    Instanciando Objetos de las classes
*/
var caja = new Caja(0, 0, 800, 600, "yellow");
var player = new Player(400, 535, 30, 0, "orange", "blue");
var enem_1 = new Enemigo(Math.random() * w, 0, 30, 30, "blue");
var enem_2 = new Enemigo(Math.random() * w, 0, 30, 30, "green");
var enem_3 = new Enemigo(Math.random() * w, 0, 30, 30, "pink");
var enem_4 = new Enemigo(Math.random() * w, 0, 30, 30, "red");
var enem_5 = new Enemigo(Math.random() * w, 0, 30, 30, "grey");
var enem_6 = new Enemigo(Math.random() * w, 0, 30, 30, "white");
var enem_7 = new Enemigo(Math.random() * w, 0, 30, 30, "purple");
var bala = new Bala(player.x, player.y, 2, 0, "black", "black");


// Mensaje inicial
function cargar() {
    var msg = "Haga click para inicial el juego";
    ctx.fillStyle = "black";
    ctx.font = '70px';
    var posicion = w/2 - ctx.measureText(msg).width/2;
    ctx.fillText(msg, posicion, h/2);

    canvashtml.addEventListener("click", function() {
        dibujando();
    });
}

// Cargando el Juego
cargar();


function enemigos(num, objeto) {

    for (let index = 0; index < num; index++) {
        objeto.mover_abajo(w, h);
        
    }
}

function dibujando() {
    caja.dibujo(ctx);

    player.dibujo(ctx);
    player.mover(key);
    
    

    if (key == 32) {
        bala.dibujo(ctx);
        bala.disparar(player.x, player.y);

        
    }
    
    
    
    

    enem_1.dibujo(ctx);
    enem_2.dibujo(ctx);
    enem_3.dibujo(ctx);
    enem_4.dibujo(ctx);
    enem_5.dibujo(ctx);
    enem_6.dibujo(ctx);
    enem_7.dibujo(ctx);

    enemigos(1, enem_1);
    enemigos(3, enem_2);
    enemigos(1, enem_3);
    enemigos(2, enem_4);
    enemigos(1, enem_5);
    enemigos(2, enem_6);
    enemigos(3, enem_7);
        

 
    puntaje();

    if(coalicion_enemigo(player, enem_1) || coalicion_enemigo(player, enem_2) || coalicion_enemigo(player, enem_3) || coalicion_enemigo(player, enem_4) || coalicion_enemigo(player, enem_5) || coalicion_enemigo(player, enem_6) || coalicion_enemigo(player, enem_7)){
        alert("Game Over");
        location.reload();
    }

    requestAnimationFrame(dibujando);
}

function puntaje() {
    ctx.beginPath();
    var msg = "Puntos: " + score;
    ctx.fillStyle = "black";
    ctx.font = "35px";
    var posicion = w / 2 - ctx.measureText(msg).width / 2;
    ctx.fillText(msg, posicion, h - 10);
    ctx.closePath();
}

function coalicion_enemigo(munieco, ini) {

    //console.log(ini);
    var player_x = munieco.x;
    var player_y = munieco.y;
    var player_radio = munieco.radio;

    var ini_x = ini.x + ini.w/2;
    var ini_y = ini.y + ini.h/2;
    
    var ini_r = ((ini.w > ini.h) ? ini.w : ini.h) / 2;

    if ((player_x - ini_x) ** 2 + (player_y - ini_y) ** 2 <= (player_radio + ini_r) ** 2) {
        console.log("ini_x:"+ini_x+"\nini_y:"+ini_y+"\nplayer_x:"+player_x+"\nplayer_y:"+player_y+"\nplayer_radio:"+player_radio);
        return true;
         
    } else {
        return false;
    }
}


window.addEventListener("keydown", function(evento) {
    key = evento.which;
    console.log(key);
});

window.addEventListener("keyup", function(evento) {
    key = 0;
});

