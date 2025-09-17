/*
Enunciado ejercicio 24:

Dado un array de enteros y un numero, Detectar si esa lista de numeros es una permutacion del 1 al numero apartado.
*/

function apart(secuence, number){

    for(let i=0; i<number; i++){

        if(secuence.indexOf(i+1) < 0){
            return false;
        }
    }

    return true;
}

console.log(apart([1,2,3,5], 5));

/* 
Explicacion:

Creo una funcion apart que recibe dos parametros, un array de numeros y un numero para tener como referencia hasta que numero queremos verificar si ese array es una permutacion o no. Despues creamos un bucle for que se ejecuta la cantidad de veces asignada por el parametro y en cada una de esas iteraciones verifico si hay un numero dentro del array que sea i+1, esto hace que si estoy en la primer iteracion que es la numero 0, este buscando el numero 1 y si estoy en la iteracion 1 este buscando el numero 2, asi lo hace sucesivamente y si en algun momento el resultado de ese indexOf es menor a 0 quiere decis que es falso.
En caso de que salga del bucle y la condicion sea positiva hago un return true.
*/