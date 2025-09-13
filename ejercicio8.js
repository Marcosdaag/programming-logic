/*
Enunciado ejercicio 8:
Dado un numero entero, invertirlo y devolver el nuevo numero entero.
*/

function reverse(number){
    numberString = parseInt(number.toString().split('').reverse().join(''));
    return  numberString
}
 
console.log(reverse(89));

/* 
Explicacion:

Creo una funcion reverse en la que le asigno como parametro un numero y dentro de la funcion hago un parseInt para pasar elr esultado a una varaible tipo number y primero paso el numero a string, despues lo separo por cada caracter, lo invierto y por ultimo lo concateno. Como ya adelante uso el parseInt no hace falta pasarlo de nuevo a number directamente paso a mostrarlo por consola.
*/