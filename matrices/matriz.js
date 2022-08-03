/**
*Practica de javascript utilizando matrices
*
*/

//Variable globales +++++
var matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//object.addEventListener("change", myScript);
window.onload = function () {
    document.getElementById('opciones').addEventListener('change', ejecutarOpcion);
};

function ejecutarOpcion() {
    let opcion = document.getElementById('opciones').value;
    BorrarMatrizDerecha();
    switch (opcion) {
        case '1':
            mostrarMatriz();
            break;
        case '2':
            mostrarDiagonalPrincipal();
            break;
        case '3':
            mostrarDiagonalInversa();
            break;
        case '4':
            mostrarSuperiorDerecha();
            break;
        case '5':
            mostrarSuperiorIzquerda();
            break;
        case '6':
            mostrarInferiorDerecha();
            break;
        case '7':
            mostrarInferiorIzquierda();
            break;
        case '8':
            generarMatriz();
            mostrarMatriz();
            break;
        default:
            break;
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function generarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            matriz[f][c] = generarAleatorio(10, 100);
        }
    }
}
/**
 * Muestra los numeros de la matriz en la caja
 */
function mostrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'i-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c];
            //matriz[f][c]
        }
    }
}
function BorrarMatrizDerecha() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = '';
            //matriz[f][c]
        }
    }
}
function mostrarDiagonalPrincipal() {
    for (let f = 0; f < matriz.length; f++) {
        //ensamblar el id "d-f3c3"
        let ident = 'd-f' + f + 'c' + f;
        //mostrarlo en la caja
        document.getElementById(ident).innerText = matriz[f][f];
    }
}

function mostrarDiagonalInversa() {
    for (let f = 0; f < matriz.length; f++) {
        let c = matriz.length - 1 - f;
        //ensamblar el id "d-f3c3"
        let ident = 'd-f' + f + 'c' + c;
        //mostrarlo en la caja
        document.getElementById(ident).innerText = matriz[f][c];
    }
}

function mostrarSuperiorIzquierda() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length - f; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c];
        }
    }
}
function mostrarSuperiorDerecha() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = f; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c];
        }
    }
}
function mostrarInferiorIzquierda() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 4 - f; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c];
        }
    }
}
function mostrarInferiorDerecha() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c <= f; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c];
        }
    }
}

/**
*Genera un numero entero aleatorio
*entre min y max
* @param {int} min valor minimo a generar
* @param {int} max velor maximo a generar
*/
function generarAleatorio(min, max) {
    let numero = Math.round(Math.random() * (max - min)) + min;
    return numero;

}
//generarMatriz();
