let listaNumerosGenerados = []
let numeroSecreto = 0
let contador = 0
let numeroMaximo = 10
let numeroOportunidades = 4


function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
}

function condicionesIniciales() {
    asignarTexto("h1", "Juego del numero secreto")
    asignarTexto("p", `Indica un numero entre 1 y ${numeroMaximo}`)
    numeroSecreto = numeroAleatorio()
    contador = 0    
    console.log(numeroSecreto)
    terminarJuego()
}

function verificarNumero() {
    let numero = parseInt(document.getElementById("numeroUsuario").value)
    contador++
    
    if (numero == numeroSecreto) {
        asignarTexto("p", `¡Adivinaste! Lo lograste en ${contador} ${contador == 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else if (numero < numeroSecreto) {
        asignarTexto("p", `El numero secreto es mayor. Te quedan ${numeroOportunidades} ${numeroOportunidades == 1 ? "intento" : "intentos"}`);
    } else {
        asignarTexto("p", `El numero secreto es menor. Te quedan ${numeroOportunidades} ${numeroOportunidades == 1 ? "intento" : "intentos"}`);
    }
    limpiarTxt()    
}

function reiniciarJuego() {

    // limpiar caja
    limpiarTxt()
    // indicar mensaje de inicio
    condicionesIniciales()    
    // deshabilitar boton reiniciar
    document.getElementById("reiniciar").setAttribute("disabled", "true")
}

function limpiarTxt() {
    document.getElementById("numeroUsuario").value = ""
}

function numeroAleatorio() {    
    // RECURSIVIDAD 
    if (numeroOportunidades == numeroMaximo) {
        asignarTexto("p", `Perdiste! El numero secreto era ${numeroSecreto}`)
        return
    } 

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1

    if (listaNumerosGenerados.includes(numeroGenerado)) {
        return numeroAleatorio()
    } else {
        listaNumerosGenerados.push(numeroGenerado)
        return numeroGenerado
    }    
}

function terminarJuego() {
    return numeroOportunidades--
}

condicionesIniciales()


