/*
Enunciado ejercicio 28:

Dado un numero devolver su factorial.
*/

function factorial(number1){
    result = 1;
    for(let i=1; i<=number1; i++){
        result = result*i;
    }

    return result;
}

console.log(factorial(4));

/* 
Explicacion:

Creo una funcion factorial que recibe un numero como parametro, a continuacion creo una variable result inicializada en uno y mediante un bucle for itero desde uno hasta la cantidad de veces que le asigne como parametro. En cada una de esas iteraciones le paso a result el valor de su multiplicacion por I y retorno su valor final.
*/