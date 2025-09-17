/*
Enunciado ejercicio 26:

Dado un numero mostrar su serie de fibonacci.
La serie fibonacci es un orden de numeros donde cada numero es la suma de los dos anteriores.
*/

function fibonacci(number1){
    let sets = [0,1];

    for(let i=2; i<=number1; i++){
        sets.push(sets[i - 1] + sets[i-2]);
    }

    return [sets, sets[number1]];
}

console.log(`Array completo de fibonacci: \n`, fibonacci(8)[0]);
console.log(`Resultado fibonacci: `, fibonacci(8)[1]);

/* 
Explicacion:

Creo una funcion fibonacci que recibe un numero de parametro el cual define el resultado despues de cuantas iteraciones quiere el usuario, despues creo un array inicial sets en el que asigno dos numeros que son por los que empieza la secuencia.
A continuacion, con un bucle for itero desde el numero dos hasta el numero seleccionado ya que los dos primeros estan asignados dentro del array y por cada iteracion del bucle suma sus dos elementos restandoles index para sumar sus antecesores y pusheo un nuevo resultado al array.
Por ultimo devuelvo un array con el array de sets que serian todos los valores que fue obteniendo y como segundo parametro le paso el segundo index del array que es donde esta el resultado de la secuencia.
*/