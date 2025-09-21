/*
Enunciado ejercicio 51:

Dado un array de numeros, devolver un array nuevo con los numeros pares e inpares separados.
*/

function oddOrPair(array1){

    let odd = [];
    let pair = [];

    for(numb of array1){
        if(numb%2 != 0){
            odd.push(numb);
        }else{
            pair.push(numb);
        }
    }

    return `pares: ${pair} impares: ${odd}`;
}

console.log(oddOrPair([50, 45, 30, 98, 3]));

/* 
Explicacion:

Creo una funcion oddOrPair que recibe como parametro un array de numeros. Inicializo dos arrays vacios, odd para almacenar los numeros impares y pair para almacenar los numeros pares. Luego, utilizo un bucle for of para recorrer cada numero del array original. Dentro del bucle, verifico si el numero es impar utilizando el operador modulo (%). Si el numero es impar (numb%2 != 0), lo agrego al array odd utilizando el metodo push. Si el numero es par, lo agrego al array pair. Finalmente, retorno una cadena de texto que muestra los numeros pares e impares separados.
*/