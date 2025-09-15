/*
Enunciado ejercicio 14:

Dado un string y un numero, repetir el string tantas veces como el numero indique.
*/

function repeat(text, count){

    let result = "";

    for(var i = 0; i<count; i++){
        result += `${text} \n`;
    }

    return result;
}

console.log(repeat("hola", 5));

/* 
Explicacion:

Creo una funcion que recibe los dos parametros, el texto y la cantidad de veces que requiero repetirlo. Dentro de la funcion creamos la variable result vacia y mediante un bucle for iteramos la cantidad de veces asignada como parametro y por cada una de esas iteraciones le concateno a result el texto y un \n para hacer un salto de linea.
Por ultimo hago un return de result.
*/