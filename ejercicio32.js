/*
Enunciado ejercicio 32:

Dado un array de numeros, devolver el array con sus numeros elevados al cuadrado.
*/

function square(array1){

    // Tambien podria usar filter para limpiar los strings no deseados.

    result = [];
    
    for(number of array1){
        let calculate = Math.pow(number, 2);
        result.push(calculate);
    }

    return result;
}

console.log(square([5, 6, 7]));

/* 
Explicacion:

Creo una funcion square que recibe un array de numeros como parametro. Inicializo una variable result como un array vacio y hago una iteracion por cada dato dentro del array que ingresa el usuario. Por cada iteracion le doy el valor de la multiplicacion del numero por si mismo a la variable de calcualte. 
Por ultimo hago un push del valor a la raviable result y la retorno al final.
*/