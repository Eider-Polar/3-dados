
let historia=[]
let almacenNumeros=0;
let contador=0;
let contadorVecesQueSeTiroElDado=0;
let numerosUsuario1=[];
let numerosUsuario2=[];
function obtenerNumerosDEJugadores(params) {
    let numerosUS =  parseInt(document.getElementById('inpPrimerNumero').value)
    numerosUsuario1.push(numerosUS)
    let numerosUS2 =  parseInt(document.getElementById('inpSegundoNumero').value)
    numerosUsuario1.push(numerosUS2)
    let numerosUS3 = parseInt(document.getElementById('inpTercerNumero').value)
    numerosUsuario1.push(numerosUS3)
    let numeros2US = parseInt(document.getElementById('inpPrimerNumero2').value)
    numerosUsuario2.push(numeros2US)
    let numeros2US2 = parseInt(document.getElementById('inpSegundoNumero2').value)
    numerosUsuario2.push(numeros2US2)
    let numeros3US2 = parseInt(document.getElementById('inpTercerNumero2').value)
    numerosUsuario2.push(numeros3US2)

}
function mostrarEnPantalla(texto) {

    let elementoHTML = document.getElementById("primerNumero");

    elementoHTML.innerHTML = texto;

    return;
}    
function mostrarEnPantalla2(texto) {

    let elementoHTML = document.getElementById("segundoNumero");

    elementoHTML.innerHTML = texto;

    return;
}    
function mostrarEnPantalla3(texto) {

    let elementoHTML = document.getElementById("tercerNumero");

    elementoHTML.innerHTML = texto;

    return;
}    
function numeros(params) {


        
        let  numeroDado =Math.floor(Math.random()*6)+1;    
        console.log(numeroDado)
       contadorVecesQueSeTiroElDado++ 
       return numeroDado     
   
    }   
function verificarSiEsMayorMenor () {
   
    if (almacenNumeros>=4){

        console.log("numero MAyor ")
    }    
     else{
        console.log("numero menor ") 
     }   
}     
function eliminarUltimoNumero() {
    
    historia.shift();
    
}    
function iniciador() {
    almacenNumeros=numeros();

    
    historia.push(almacenNumeros);
    mostrarEnPantalla(historia[0])
    mostrarEnPantalla2(historia[1])
    mostrarEnPantalla3(historia[2])
    
    
  
        console.log(historia)
}        
function iniciador2(params) {
    obtenerNumerosDEJugadores()
    Array.prototype.equals = function(getArray) {
        if (this.length != getArray.length) return false;
    
        for (var i = 0; i < getArray.length; i++) {
        if (this[i] instanceof Array && getArray[i] instanceof Array) {
            if (!this[i].equals(getArray[i])) return false;
        } else if (this[i] != getArray[i]) {
            return false;
        }    
        }
        return true;
    };    
        // funciona tipo nombre de la lista.equals(lista a comparar ) el .equals como que es una funcion 
        console.log('Comparing a1 and a2', historia.equals(numerosUsuario1));
    
    
        
        while ( true) {
            eliminarUltimoNumero();
            
                iniciador();
           
            console.log(historia)
            if(historia.equals(numerosUsuario1)==true){
                alert("gano el usuario 1 despues de haber lanzado el dado "+ contadorVecesQueSeTiroElDado + " veces ")
                break
            }    
            if(historia.equals(numerosUsuario2)==true){
                alert("gano el usuario 2 despues de haber lanzado el dado "+ contadorVecesQueSeTiroElDado + " veces ")
                break
            }    
        }    
}
while (true) {
    contador++
    if(contador==4){
        break
    }else{
        iniciador();
    }    
}   
document.getElementById("inpPrimerNumero").style.color="red";

    



    // Variables
   
   

  
