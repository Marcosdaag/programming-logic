/*
Enunciado ejercicio 40:

Dado un array de numeros, devolver el valor mas bajo y el valor mas alto.
*/

function lowerAndUpper(array1){
    let result = "";

    arrayOr = array1.sort((a,b)=> a - b);

    result = `${arrayOr[0]} y ${arrayOr[arrayOr.length - 1]}`;

    return result;
}

console.log(lowerAndUpper([ 10, 20, 3, 5, 90 ]));

/* 
Explicacion:

Creamos una funcion lowerAndUpper que recibe como parametro un array de numeros, despues ordenamos el array de manera ascendente y guardamos todo dentro de la variable arrayOr, por ultimo a result le damos los valores de los indices que queremos mostrar y returnamos la variable.
*/