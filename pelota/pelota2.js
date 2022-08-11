/**
 * Practica de POO usando canvas
 * MLM
 * 2022/08/05
 */

/** CARGAR RECURSOS */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var pelotas = [];
var cantidad = 50;

var colores = [
    'Red',
    'Cyan',
    'Blue',
    'DarkBlue',
    'LightBlue',
    'Purple',
    'Yellow',
    'lime',
    'Magenta',
    'Pink',
    'Silver',
    'Black',
    'Orange',
    'Brown',
    'Maroon',
    'Green',
    'Olive',
    'Aquamarine',
    'Red',
    'Grey'    
]


/**
 * DEFINICION DE LA CLASE 
 */

 class Pelota{
    constructor(){
        this.radio = generarNumero(10, 40);
        this.centro = {x: generarNumero(this.radio, canvas.width - this.radio), 
            y: generarNumero(this.radio, canvas.height - this.radio)};
        this.vel = {x: generarNumero(-5, +5), y:generarNumero(-5, +5)};
        this.colorBorde = colores[generarNumero(0, colores.length)];
        this.colorRelleno = colores[generarNumero(0, colores.length)];
    }

    dibujar(){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.arc(this.centro.x, this.centro.y, this.radio, 0, 2 * Math.PI);
        ctx.strokeStyle = this.colorBorde;
        ctx.fillStyle = this.colorRelleno;
        ctx.fill();
        ctx.stroke();  

    }

    mover(){
        this.centro.x += this.vel.x;
        this.centro.y += this.vel.y;
        // Controlar rebotes 
        if (this.centro.x + this.radio >= canvas.width || this.centro.x <= this.radio) {
            this.vel.x *= -1;
        }
        if (this.centro.y + this.radio>= canvas.height || this.centro.y <= this.radio) {
            this.vel.y *= -1;
        }

    }
}




/**
 * FUNCIONES AUXILIARES
 * 
 */

function generarNumero(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/***************************************************************************
 * PROGRAMA PRINCIPAL 
 */

for (let i = 0; i < cantidad; i++) {
    pelotas.push(new Pelota());
    
}

var body = document.body;
var html = document.documentElement;

var h = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var w = Math.max( body.scrollWidth, body.offsetWidth, 
                        html.clientWidth, html.scrollWidth, html.offsetWidth );
 
canvas.height = h- 40;
canvas.width = w- 40;

animar();

/** DIBUJAR EL MUNDO */
function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < cantidad; i++) {
        pelotas[i].dibujar(); 
    }
}
/** CALCULAR VALORES */
function calcular() {

    for (let i = 0; i < cantidad; i++) {
        pelotas[i].mover(); 
    }
}

/** CICLO DE ANIMACION */
function animar() {
    dibujar();
    calcular();
    requestAnimationFrame(animar);
}

/********************************************************************* */