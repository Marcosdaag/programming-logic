/*
Enunciado ejercicio 35:

Dado un array, crear otro con el primer y el ultimo elemento del array original.
*/

function createArray(array1){
    let firstAndLast = [];
    firstAndLast.push(array1[0]);
    firstAndLast.push(array1[array1.length-1]);
    return firstAndLast;
}

console.log(createArray([5,5,6,7]));

/* 
Explicacion:

Creo una funcion createArray que recibe un arreglo como parametro, a continuacion creo una variable para el nuevo array y pusheo los elementos necesarios, en este caso el primer elemento y el segundo elemento se saca del calculo del tamaño del array menos 1 ya que al iniciar en 0, si no le restamos uno nos da un indice que no es valido.
*/