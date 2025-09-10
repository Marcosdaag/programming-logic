/*
Enunciado ejercicio 2:
Dada una cadena de texto, comprobar si es un palindromo o no.
Los palindromos son palabras que se leen igual aun estado invertidas.
Ejemplos: bob, ana
*/

function palindromo(text){
    let reverse = text.split('').reverse().join('');
    return(reverse === text);

    // Esta es otra manera de que retorne true o false
    /* if(text == reverse){
        return true;
    }else{
        return false;
    } */
}

console.log("Es un palindromo? "+palindromo("Marcos"));