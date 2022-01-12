let title = document.getElementById('titulo'); 

console.log(titulo); 


titulo.textContent = 'texto escrito en javascript'



let parrafos = document.getElementsByTagName('p'); 
console.log(parrafos); 

/* parrafos[0].textContent = 'nuevo'; */

/* for(let i = 0; i < parrafos.length; i++){
    parrafos[i].textContent = 'parrafo' + i + 'escritos'

}
 */


let email = document.getElementById('email'); 
let password = document.getElementById('password'); 


function getInformation () {
    console.log(email.value); 
    console.log(password.value); 
}
