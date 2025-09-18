/*
Enunciado ejercicio 29:

Dado un numero indicar si es un numero capicua o no.
*/

function capi(number1){
    let proces = parseInt(number1.toString().split('').reverse().join(''));
    return proces === number1;
}

console.log(capi(2003));

/* 
Explicacion:

Creo una funcion capi que recibe el numero a comprobar como parametro, dentro de la funcion creo la variable let que agarra el numero ingresado, lo pasa a string, lo divide en cada uno de sus caracteres, lo ordena de atras hacia adelante y lo vuelve a unir. A todo el resultado lo pasa a tipo number con la primer funcion parseInt.
Una vez teniendo el numero dado vuelta retornamos el valor de la comprobacion que si el numero dado vuelta es igual al original, por lo tanto devuelve true o false.
*/