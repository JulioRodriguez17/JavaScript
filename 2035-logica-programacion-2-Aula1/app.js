let numeroSecreto = 0;
let numeroIntentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Felicidades! ¡Acertaste el numero en ${numeroIntentos} ${(numeroIntentos===1)?'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   }
    else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','¡El número secreto es menor!');
        }
        else {
            asignarTextoElemento('p','¡El número secreto es mayor!');
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego() {
    //Limpiar la caja de texto
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar un nuevo numero secreto
    //Inicializar el contador de intentos
    condicionesIniciales();
    //Deshabilitar el boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 100) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Ya se han sorteado todos los numeros?
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','¡Ya no hay numeros para sortear!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //Si el numero generado esta en la lista, no volver a mostrarlo
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}

function condicionesIniciales(){
asignarTextoElemento('h1','Juego del Numero Secreto');
asignarTextoElemento('p','Indica un numero del 1 al 100');
numeroSecreto = generarNumeroSecreto();
numeroIntentos = 1;
console.log(numeroSecreto);
}

condicionesIniciales();