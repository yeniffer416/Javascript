/**
 * Practica de POO usando canvas
 * MLM
 * 2022/08/05
 */


/**CARGAR RECURSOS */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


/**VALORES INICALES */
var centro = { x: 100, y: 100 };
var radio = 50;
var velo = { x: 5, y: 2 };
animar();


/**DIBUJAR MUNDO */
function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.arc(centro.x, centro.y, radio, 0, 2 * Math.PI);
    ctx.stroke();

}


/**CALCULAR VALORES */
function calcular() {
    centro.x += velo.x;
    centro.y += velo.y;
    //controlar rebotes
    if (centro.x + radio >= canvas.width || centro.x <= radio) {
        velo.x *= -1;
    }
    if (centro.y + radio >= canvas.height || centro.y <= radio) {
        velo.y *= -1;
    }
}

/**CICLO DE ANIMACION */
function animar() {
    dibujar();
    calcular();
    requestAnimationFrame(animar);
}

