function HolaMundo() {
    console.log("Hola Mundo");
}

function RecibirNombre() {
    let nombreDeUsuario = document.getElementById("inputNameHTML").value;
    console.log (`Hola, ${nombreDeUsuario}`);
    return;
}

function RecibirNumero() {
    let nombreDeUsuario = parseInt(document.getElementById("inputNameHTML").value) * 2;

    console.log (`Hola este es un numero, ${nombreDeUsuario}`);
    return;
}


function promedioDeTresNumero() {
    let nombreDeUsuario = parseInt(document.getElementById("inputNameHTML").value);
    console.log (`Hola esta es la cantidad de valores que voy a buscar obtener el promedio, ${nombreDeUsuario}`);
    let variabreCambiante = nombreDeUsuario;
    let sumaDeValores=0;
    let ValorInput=0;
    while (variabreCambiante>0)
    {
        valorInput=parseInt(document.getElementById("inputNameHTML").value);
        sumaDeValores=sumaDeValores+valorInput;
        variabreCambiante--;
        console.log(`Hola hace falta ${variabreCambiante}de numeros para terminar el promedio`);     
    }
    let valorDePromedioDeTresNumeros = sumaDeValores / nombreDeUsuario;
    console.log(valorDePromedioDeTresNumeros);

    
    return;
}


/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafio";

function intentoBoton() {
    alert("Click");
}

function PromptButtonTouch(){
    let CiudadDelVisitante = prompt("Hola podrias nombrar una ciudad de Brasil?");
    alert(`Estuve en ${CiudadDelVisitante} y me acorde de ti`);
}

function clickAlert() {
    alert("Yo amo JS");
}

function clickSuma(){
    let PrimerDigito = parseInt(prompt("Hola podrias darme un numero"));
    let SegundoDigito = parseInt(prompt("Hola podrias darme el segundo numero"));
    let suma = PrimerDigito + SegundoDigito;
    alert(`La suma de tus numeros es de  ${suma}`);
}*/

