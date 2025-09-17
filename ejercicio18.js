/*
Enunciado ejercicio 18:

Dado un numero, mostrar todos sus numero divisores.
*/

function divisor(number){
    let div = [];
    for(var i=0; i<=number; i++){
        if(number%i==0){
            div.push([i]);
        }
    }

    return div;
}

console.log(divisor(15));

/* 
Explicacion:

Creo una funcion divisor que recibe como parametro un numero, despues inicializo un array div vacio y con un bucle for itero la cantidad de veces necesarias para llegar desde el cero al numero que le asigne, en cada una de esas iteraciones verifico que si el resto de dividir el numero por el numero de la iteracion actual da como resultado cero, pusheo esa iteracion al array div.
Por ultimo retorno div y con un console.log asigno la funcion.
*/