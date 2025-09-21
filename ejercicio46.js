/*
Enunciado ejercicio 46:

Dado un string, devolver todos los posibles substrings.
*/

function getSubStrings(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}
 
console.log(getSubStrings('hola'));

/* 
Explicacion:

Creo una funcion getSubStrings que recibe como parametro un string. Creo un array result vacio para almacenar los substrings. Luego, utilizo dos bucles for anidados. El primer bucle itera sobre cada caracter del string con el indice i, y el segundo bucle itera desde i+1 hasta la longitud del string con el indice j. En cada iteracion del segundo bucle, utilizo el metodo slice para obtener el substring desde el indice i hasta j (no incluido) y lo agrego al array result.
Por ultimo hago un resturno del array result que contiene todos los posibles substrings del string original.
*/