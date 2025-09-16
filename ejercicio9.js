/*
Enunciado ejercicio 9:

Dado dos arrays, devolver el array con solo los elementos comunes entre ambos.
*/

function repeatElements(array1, array2){
    const filter = array1.filter(element =>{
        return array2.includes(element);
    });

    console.log(filter);
}

repeatElements([5, 6, 7, 8, 0], [1, 9, 5, 6]);

/* 
Explicacion:

Creo una funcion repeatElements que recibe 2 parametros que le vamos a dar en tipo Array, despues asigno una constante que tiene como valor el filtro de cada valor del array1. Si el array numero2 incluye alguno de los elementos que tiene el array1, los guarda dentro de la constante filter. 
Por ultimo hago un console log de filter que almacena los valores en comun entre los arrays.
*/