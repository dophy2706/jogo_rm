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
var ok = 0;

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
var enem_8 = new Enemigo(Math.random() * w, 0, 30, 30, "black");
var enem_9 = new Enemigo(Math.random() * w, 0, 30, 30, "#8b027e");
var enem_10 = new Enemigo(Math.random() * w, 0, 30, 30, "#355500");
//var bala = new Bala(player.x, player.y, 2, 0, "black", "black");
var bala = new Bala(player.x, player.y, 2, 4, "black");


// Mensaje inicial
function cargar() {
    var msg = "Haga click para iniciar el juego, y presione tecla espacio para tirar";
    ctx.fillStyle = "black";
    ctx.font = '70px';
    var posicion = w / 2 - ctx.measureText(msg).width / 2;
    ctx.fillText(msg, posicion, h / 2);

    canvashtml.addEventListener("click", function () {
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

    bala.dibujo(ctx);

    if (ok == 1) {
        bala.disparar(player.x, player.y);
    } else {
        bala.y = player.y;
        bala.x = player.x;
    }

    enem_1.dibujo(ctx);
    enem_2.dibujo(ctx);
    enem_3.dibujo(ctx);
    enem_4.dibujo(ctx);
    enem_5.dibujo(ctx);
    enem_6.dibujo(ctx);
    enem_7.dibujo(ctx);
    enem_8.dibujo(ctx);
    enem_9.dibujo(ctx);
    enem_10.dibujo(ctx);

    enemigos(4, enem_1);
    enemigos(1, enem_2);
    enemigos(3, enem_3);
    enemigos(2, enem_4);
    enemigos(1, enem_5);
    enemigos(2, enem_6);
    enemigos(1, enem_7);
    enemigos(2, enem_8);
    enemigos(2, enem_9);
    enemigos(1, enem_10);

    puntaje();

    if (coalicion_enemigo(player, enem_1) || coalicion_enemigo(player, enem_2) || coalicion_enemigo(player, enem_3) || coalicion_enemigo(player, enem_4) || coalicion_enemigo(player, enem_5) || coalicion_enemigo(player, enem_6) || coalicion_enemigo(player, enem_7) || coalicion_enemigo(player, enem_8) || coalicion_enemigo(player, enem_9) || coalicion_enemigo(player, enem_10)) {
        alert("Game Over");
        location.reload();
    }

    if (coalicion_enemigo_bala(bala, enem_1) || coalicion_enemigo_bala(bala, enem_2) || coalicion_enemigo_bala(bala, enem_3) || coalicion_enemigo_bala(bala, enem_4) || coalicion_enemigo_bala(bala, enem_5) || coalicion_enemigo_bala(bala, enem_6) || coalicion_enemigo_bala(bala, enem_7) || coalicion_enemigo_bala(bala, enem_10) || coalicion_enemigo_bala(bala, enem_9) || coalicion_enemigo_bala(bala, enem_8)) {
        ok = 0;
        score++;
        //alert("Punto");
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
    var munieco_x = munieco.x;
    var munieco_y = munieco.y;
    var munieco_radio = munieco.radio;

    var ini_x = ini.x + ini.w / 2;
    var ini_y = ini.y + ini.h / 2;

    var ini_r = ((ini.w > ini.h) ? ini.w : ini.h) / 2;

    if ((munieco_x - ini_x) ** 2 + (munieco_y - ini_y) ** 2 <= (munieco_radio + ini_r) ** 2) {
        //console.log("ini_x:"+ini_x+"\nini_y:"+ini_y+"\ntiro_x:"+tiro_x+"\ntiro_y:"+tiro_y+"\ntiro_radio:"+tiro_radio);
        return true;

    } else {
        return false;
    }
}

function coalicion_enemigo_bala(tiro, ini) {

    //console.log(ini);
    var tiro_x = tiro.x;
    var tiro_y = tiro.y;
    var tiro_radio = tiro.h / 2;

    var ini_x = ini.x + ini.w / 2;
    var ini_r = ini.h / 2;
    var ini_y = ini.y + ini.h / 2;

    var ini_r = ((ini.w > ini.h) ? ini.w : ini.h) / 2;

    if ((tiro_x - ini_x) ** 2 + (tiro_y - ini_y) ** 2 <= (tiro_radio + ini_r) ** 2) {

        ini.matar(w, h);
        return true;

    } else {
        return false;
    }
}


window.addEventListener("keydown", function (evento) {
    key = evento.which;
    console.log(key);
    if (key == 32) {
        ok = 1;
    }
});

window.addEventListener("keyup", function (evento) {
    key = 0;
});

