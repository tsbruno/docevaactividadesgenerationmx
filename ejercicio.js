let añoactual = 2022; 
let resta = document.getElementById('edad'); 

function calcular() {
    let edad = prompt("Introduzca su fecha de nacimiento")
    resta.textContent = añoactual - edad; 
}


