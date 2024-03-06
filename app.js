/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Selecciona un numero del 1 al 10";*/
let numeroDeIntentos=1;
let listaNumerosCreados = [];
let numeroMaximo = 10;

condicionesIniciales();
console.log(numeroRandomSecreto);

function asignarTextoElemento(elemento, texto) {
 let elementoHTML = document.querySelector(elemento);
 elementoHTML.innerHTML = texto;
 return;
}

function verificarNumero() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
        
    if (numeroDeUsuario === numeroRandomSecreto){
        asignarTextoElemento("p", `Acertaste el Número en ${numeroDeIntentos} ${numeroDeIntentos === 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuaruio no acerto
        if (numeroDeUsuario > numeroRandomSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        } else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        numeroDeIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector("#valorUsuario").value ="";
   
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosCreados);

    if (listaNumerosCreados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {

    

   
    if (listaNumerosCreados.includes (numeroGenerado )){
        return generarNumeroSecreto();
    } else {
        listaNumerosCreados.push(numeroGenerado);
        return numeroGenerado; 
    }
}

    //return Math.floor(Math.random()*10)+1; 

}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero Super Secreto");
    asignarTextoElemento("p",`Selecciona un numero del 1 al ${numeroMaximo}`);
    numeroRandomSecreto = generarNumeroSecreto();
    
}

function reiniciarJuegoFunction(){
    limpiarCaja();
    condicionesIniciales();
    console.log(numeroRandomSecreto);
    document.querySelector("#reiniciar").setAttribute("disabled", "true");



    //limpiar la caja
    // indicar mensaje de inicio
    // generar el numero aleatorio
    //desahibiliar boton
    // iniciarlizar numero de intentos


}2