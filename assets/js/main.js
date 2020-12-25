//Variables
var jugador1 = "Jugador 1";
var jugador2 = "Jugador 2";
var turno = 1;
var A1, A2, A3, B1, B2, B3, C1, C2, C3;
var btnIniciar = document.querySelector(".btnIniciar");
var btnCarrarInicio = document.querySelector(".btnCerrarInicio");
var puntos1 = 0;
var puntos2 = 0;
var ganador = false;
var tiradas = 0;

//Crear canvas con Libreria pixi

var app = new PIXI.Application({
    backgroundColor: 0x1A8CCC,
    width: 400,
    height: 501
});

document.getElementById("contenedorCanvas ").appendChild(app.view);

app.view.style.border = "2px solid #ffff ";
app.autoResize = true;

//Creacion de Lineas del tablero

var anchoJuego = app.renderer.view.width;
var altoJuego = app.renderer.view.height;

var line = new PIXI.Graphics();
line.lineStyle(4, 0xFFFFFF, 1);
line.moveTo(0, 0);
line.lineTo(0, 1);
line.x = anchoJuego / 3;
line.y = 0;

app.stage.addChild(line);

var line2 = new PIXI.Graphics();
line2.lineStyle(4, 0xFFFFFF, 1);
line2.moveTo(0, 0);
line2.lineTo(0, 1);
line2.x = anchoJuego * 2 / 3;
line2.y = 0;

app.stage.addChild(line2);

var line3 = new PIXI.Graphics();
line3.lineStyle(4, 0xFFFFFF, 1);
line3.moveTo(0, 0);
line3.lineTo(1, 0);
line3.x = 0;
line3.y = altoJuego / 3;

app.stage.addChild(line3);

var line4 = new PIXI.Graphics();
line4.lineStyle(4, 0xFFFFFF, 1);
line4.moveTo(0, 0);
line4.lineTo(1, 0);
line4.x = 0;
line4.y = altoJuego * 2 / 3;

app.stage.addChild(line4);

console.log(line4);


//Iniciar partida 

function iniciarPartida() {

    //Salida de la primera sección

    document.getElementById("seccionInicio").classList.remove("blur");
    document.getElementById("seccionInicio").classList.add("animarJuego");
    document.getElementById("seccionJuego").classList.add("animarInicio");

    //Pintar los nombres de jugadores en el tablero
    jugador1 = document.getElementById("nombre1").value;
    jugador2 = document.getElementById("nombre2").value;

    if (jugador1 != "" && jugador2 != "") {
        document.getElementById("jugador1").innerHTML = `${jugador1}`;
        document.getElementById("jugador2").innerHTML = `${jugador2}`;
    }

    //Animar las lineas del tablero
    setTimeout(() => {
        app.ticker.add(function() {
            // Animación pintar lineas del tablero
            if (line.height < altoJuego) {
                line.height += 50;
            }

            setTimeout(() => {
                if (line2.height < altoJuego) {
                    line2.height += 50;
                }
            }, 200);
            setTimeout(() => {
                if (line3.width < anchoJuego) {
                    line3.width += 50;
                }
            }, 500);
            setTimeout(() => {
                if (line4.width < anchoJuego) {
                    line4.width += 50;
                }
            }, 750);


        });
    }, 1000);


}

/////////////////////// Fichas ///////////////////////


// Crear textura de reposo
var fichaReposo = PIXI.Texture.fromImage('../assets/img/reposo.png');
// Crear textura de fixa X
var fichaX = PIXI.Texture.fromImage('../assets/img/nave.png');
// Crear textura de fixa O
var fichaO = PIXI.Texture.fromImage('../assets/img/marciano.png');

// Crear Sprite de ficha y columnas

/*******Ficha1*********/
var fichaA1 = new PIXI.Sprite(fichaReposo);
// Propiedades
fichaA1.x = 65;
fichaA1.y = 80;
fichaA1.interactive = true;
fichaA1.buttonMode = true;
fichaA1.anchor.set(0.5);

app.stage.addChild(fichaA1);
/*******Fin Ficha1*********/

/*******Ficha2*********/
var fichaA2 = new PIXI.Sprite(fichaReposo);
// Propiedades
fichaA2.x = 200;
fichaA2.y = 80;
fichaA2.interactive = true;
fichaA2.buttonMode = true;
fichaA2.anchor.set(0.5);

app.stage.addChild(fichaA2);
/*******Fin Ficha2*********/

/*******Ficha3*********/
var fichaA3 = new PIXI.Sprite(fichaReposo);
// Propiedades
fichaA3.x = 335;
fichaA3.y = 80;
fichaA3.interactive = true;
fichaA3.buttonMode = true;
fichaA3.anchor.set(0.5);

app.stage.addChild(fichaA3);
/*******Fin Ficha3*********/

/*******Ficha4*********/
var fichaB1 = new PIXI.Sprite(fichaReposo);
// Propiedades
fichaB1.x = 65;
fichaB1.y = 250;
fichaB1.interactive = true;
fichaB1.buttonMode = true;
fichaB1.anchor.set(0.5);

app.stage.addChild(fichaB1);
/*******Fin Ficha4*********/

/*******Ficha5*********/
var fichaB2 = new PIXI.Sprite(fichaReposo);
// Propiedades
fichaB2.x = 200;
fichaB2.y = 250;
fichaB2.interactive = true;
fichaB2.buttonMode = true;
fichaB2.anchor.set(0.5);

app.stage.addChild(fichaB2);
/*******Fin Ficha5*********/

/*******Ficha6*********/
var fichaB3 = new PIXI.Sprite(fichaReposo);
// Propiedades
fichaB3.x = 335;
fichaB3.y = 250;
fichaB3.interactive = true;
fichaB3.buttonMode = true;
fichaB3.anchor.set(0.5);

app.stage.addChild(fichaB3);
/*******Fin Ficha6*********/

/*******Ficha7*********/
var fichaC1 = new PIXI.Sprite(fichaReposo);
// Propiedades
fichaC1.x = 65;
fichaC1.y = 420;
fichaC1.interactive = true;
fichaC1.buttonMode = true;
fichaC1.anchor.set(0.5);

app.stage.addChild(fichaC1);
/*******Fin Ficha7*********/

/*******Ficha8*********/
var fichaC2 = new PIXI.Sprite(fichaReposo);
// Propiedades
fichaC2.x = 200;
fichaC2.y = 420;
fichaC2.interactive = true;
fichaC2.buttonMode = true;
fichaC2.anchor.set(0.5);

app.stage.addChild(fichaC2);
/*******Fin Ficha8*********/

/*******Ficha9*********/
var fichaC3 = new PIXI.Sprite(fichaReposo);
// Propiedades
fichaC3.x = 335;
fichaC3.y = 420;
fichaC3.interactive = true;
fichaC3.buttonMode = true;
fichaC3.anchor.set(0.5);

app.stage.addChild(fichaC3);
/*******Fin Ficha9*********/

// Crear interactividad
fichaA1.on('pointertap', function() {

    if (A1 == null) {

        if (turno == 1) {
            fichaA1.texture = fichaX;
            turno = 2;
            A1 = "X ";
            validaGanador()
        } else {
            fichaA1.texture = fichaO;
            turno = 1;
            A1 = "O ";
            validaGanador()
        }
    }
});

fichaA2.on('pointertap', function() {

    if (A2 == null) {

        if (turno == 1) {
            fichaA2.texture = fichaX;
            turno = 2;
            A2 = "X ";
            validaGanador()
        } else {
            fichaA2.texture = fichaO;
            turno = 1;
            A2 = "O ";

            validaGanador()
        }
    }
});

fichaA3.on('pointertap', function() {

    if (A3 == null) {

        if (turno == 1) {
            fichaA3.texture = fichaX;
            turno = 2;
            A3 = "X ";

            validaGanador()
        } else {
            fichaA3.texture = fichaO;
            turno = 1;
            A3 = "O ";

            validaGanador()
        }
    }
});

//-------------------------------

fichaB1.on('pointertap', function() {


    if (B1 == null) {

        if (turno == 1) {
            fichaB1.texture = fichaX;
            turno = 2;
            B1 = "X ";

            validaGanador()
        } else {
            fichaB1.texture = fichaO;
            turno = 1;
            B1 = "O ";

            validaGanador()
        }
    }
});

fichaB2.on('pointertap', function() {

    if (B2 == null) {

        if (turno == 1) {
            fichaB2.texture = fichaX;
            turno = 2;
            B2 = "X ";

            validaGanador()
        } else {
            fichaB2.texture = fichaO;
            turno = 1;
            B2 = "O ";

            validaGanador()
        }
    }
});

fichaB3.on('pointertap', function() {

    if (B3 == null) {

        if (turno == 1) {
            fichaB3.texture = fichaX;
            turno = 2;
            B3 = "X ";

            validaGanador()
        } else {
            fichaB3.texture = fichaO;
            turno = 1;
            B3 = "O ";

            validaGanador()
        }
    }
});

//-------------------------------

fichaC1.on('pointertap', function() {


    if (C1 == null) {

        if (turno == 1) {
            fichaC1.texture = fichaX;
            turno = 2;
            C1 = "X ";

            validaGanador()
        } else {
            fichaC1.texture = fichaO;
            turno = 1;
            C1 = "O ";

            validaGanador()
        }
    }
});

fichaC2.on('pointertap', function() {

    if (C2 == null) {

        if (turno == 1) {
            fichaC2.texture = fichaX;
            turno = 2;
            C2 = "X ";

            validaGanador()
        } else {
            fichaC2.texture = fichaO;
            turno = 1;
            C2 = "O ";

            validaGanador()
        }
    }
});

fichaC3.on('pointertap', function() {

    if (C3 == null) {

        if (turno == 1) {
            fichaC3.texture = fichaX;
            turno = 2;
            C3 = "X ";

            validaGanador()
        } else {
            fichaC3.texture = fichaO;
            turno = 1;
            C3 = "O ";

            validaGanador()
        }
    }
});


//Comprobar si hay un ganador

function validaGanador() {
    tiradas++
    //Gana Jugador 1
    if (A1 == "X " && A2 == "X " && A3 == "X ") {
        ganaste();
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador1}`;
        puntos1++;
        document.getElementById("puntos1").innerHTML = `${puntos1}`;
        ganador = true;

    }
    if (B1 == "X " && B2 == "X " && B3 == "X ") {
        ganaste()
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador1}`;
        puntos1++;
        document.getElementById("puntos1").innerHTML = `${puntos1}`;
        ganador = true;
    }
    if (C1 == "X " && C2 == "X " && C3 == "X ") {
        ganaste()
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador1}`;
        puntos1++;
        document.getElementById("puntos1").innerHTML = `${puntos1}`;
        ganador = true;
    }

    if (A1 == "X " && B1 == "X " && C1 == "X ") {
        ganaste()
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador1}`;
        puntos1++;
        document.getElementById("puntos1").innerHTML = `${puntos1}`;
        ganador = true;
    }
    if (A2 == "X " && B2 == "X " && C2 == "X ") {
        ganaste()
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador1}`;
        puntos1++;
        document.getElementById("puntos1").innerHTML = `${puntos1}`;
        ganador = true;
    }
    if (A3 == "X " && B3 == "X " && C3 == "X ") {
        ganaste()
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador1}`;
        puntos1++;
        document.getElementById("puntos1").innerHTML = `${puntos1}`;
        ganador = true;
    }

    if (A1 == "X " && B2 == "X " && C3 == "X ") {
        ganaste()
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador1}`;
        puntos1++;
        document.getElementById("puntos1").innerHTML = `${puntos1}`;
        ganador = true;
    }
    if (A3 == "X " && B2 == "X " && C1 == "X ") {
        ganaste()
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador1}`;
        puntos1++;
        document.getElementById("puntos1").innerHTML = `${puntos1}`;
        ganador = true;
    }

    //Gana Jugador 2
    if (A1 == "O " && A2 == "O " && A3 == "O ") {
        ganaste();
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador2}`;
        puntos2++;
        document.getElementById("puntos2").innerHTML = `${puntos2}`;
        ganador = true;
    }
    if (B1 == "O " && B2 == "O " && B3 == "O ") {
        ganaste();
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador2}`;
        puntos2++;
        document.getElementById("puntos2").innerHTML = `${puntos2}`;
        ganador = true;
    }
    if (C1 == "O " && C2 == "O " && C3 == "O ") {
        ganaste();
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador2}`;
        puntos2++;
        document.getElementById("puntos2").innerHTML = `${puntos2}`;
        ganador = true;
    }

    if (A1 == "O " && B1 == "O " && C1 == "O ") {
        ganaste();
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador2}`;
        puntos2++;
        document.getElementById("puntos2").innerHTML = `${puntos2}`;
        ganador = true;
    }
    if (A2 == "O " && B2 == "O " && C2 == "O ") {
        ganaste();
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador2}`;
        puntos2++;
        document.getElementById("puntos2").innerHTML = `${puntos2}`;
        ganador = true;
    }
    if (A3 == "O " && B3 == "O " && C3 == "O ") {
        ganaste();
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador2}`;
        puntos2++;
        document.getElementById("puntos2").innerHTML = `${puntos2}`;
        ganador = true;
    }

    if (A1 == "O " && B2 == "O " && C3 == "O ") {
        ganaste();
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador2}`;
        puntos2++;
        document.getElementById("puntos2").innerHTML = `${puntos2}`;
        ganador = true;
    }
    if (A3 == "O " && B2 == "O " && C1 == "O ") {
        ganaste();
        document.getElementById("nombreGanador").innerHTML = `El ganador es <br/> ${jugador2}`;
        puntos2++;
        document.getElementById("puntos2").innerHTML = `${puntos2}`;
        ganador = true;
    }

    //Si nadie gana
    if (tiradas == 9 && ganador == false) {

        $("#ganador").modal("show");
        document.getElementById("nombreGanador").innerHTML = `Muy buen juego, fue un empate`;
        document.getElementById("seccionJuego").classList.add("blur");
    }



}

//Mostrar Modal Ganador

function ganaste() {
    $("#ganador").modal("show");
    document.getElementById("seccionJuego").classList.add("blur");
}

//Limpiar Tablero para seguir jugando
function limpiar() {
    turno = 1
    fichaA1.texture = fichaReposo;
    A1 = null;
    fichaA2.texture = fichaReposo;
    A2 = null;
    fichaA3.texture = fichaReposo;
    A3 = null;
    fichaB1.texture = fichaReposo;
    B1 = null;
    fichaB2.texture = fichaReposo;
    B2 = null;
    fichaB3.texture = fichaReposo;
    B3 = null;
    fichaC1.texture = fichaReposo;
    C1 = null;
    fichaC2.texture = fichaReposo;
    C2 = null;
    fichaC3.texture = fichaReposo;
    C3 = null;
    document.getElementById("seccionJuego").classList.remove("blur");
    ganador = false;
    tiradas = 0;
}

//Limpiar Tablero
function reiniciar() {
    location.reload();
}


//Blur modal
btnIniciar.addEventListener("click", function() {

    document.getElementById("seccionInicio").classList.add("animarInicio");
    setTimeout(() => {
        document.getElementById("seccionInicio").classList.add("blur");

    }, 1000);


});

btnCarrarInicio.addEventListener("click", function() {
    iniciarPartida()
});

//Animaciones Básica utilizando Velocity

$(".planeta2").velocity({
    scale: 1.02,
    marginTop: -20,
    marginLeft: 20
}, {
    duration: 2000,
    loop: 3000
});

$(".planeta1").velocity({
    scale: 1.02,
    marginTop: 20,

}, {
    duration: 1300,
    loop: 3000
});

$(".rocas").velocity({
    scale: 1.1,
    marginLeft: -20,
    marginTop: -20

}, {
    duration: 2000,
    loop: 3000
});

$(".rocas1").velocity({
    marginLeft: 20,


}, {
    duration: 1500,
    loop: 3000
}, "linear");

$(".rocas3").velocity({

    marginRight: 30,

}, {
    duration: 1800,
    loop: 3000
}, "linear");

$(".rocas2").velocity({

    marginRight: 30,

}, {
    duration: 1800,
    loop: 3000
}, "linear");

$(".nave").velocity({
    scale: 0.97,
    marginTop: 90,

}, {
    duration: 2000,
    loop: 3000
});