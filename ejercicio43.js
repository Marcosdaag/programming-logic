/*
Enunciado ejercicio 43:

Dado un array de numeros sacar la media de todos ellos.
*/

function average(array1){
    let result;
    let add = 0;

    for(number of array1){
        add += number;
    }

    result = add/array1.length;

    return result;
}

console.log(average([5, 5, 5, 6]));

/* 
Explicacion:

Creo una funcion average que recibe como parametro un array, despues creo dos variables, una de result y otra de add. Mediante un bucle for hago una iteracion y sumo el valor actual recorrido a add. 
Por ultimo divido add (sumatoria de todos los elementos) por la cantidad de elementos, me da como resultado la media, se la asigno a result y retorno su valor.
*/