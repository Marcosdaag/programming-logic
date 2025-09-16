/*
Enunciado ejercicio 10:

Dado un numero, mostrar una escalera con escalones de "[-]" usando el numero para los niveles de la escalera.
*/

function ladder(number){
    let completeLadder = "";

    for(let lvl = 1; lvl<number; lvl++){

        let steps = "";
        for(let step = 1; step <= lvl; step++){
            steps += "[-]";
        }

        completeLadder += steps + '\n';
    }

    console.log(completeLadder);
}

ladder(5);

/* 
Explicacion:

Creo una funcion ladder que recibe como parametro un numero. Dentro de la funcion creamos una variable que seria la escalera completa y la inicializamos sin valor, despues hacemos un bucle for que se repite por cada nivel/piso que le asignamos como parametro a la funcion.
En cada una de esas iteraciones o pisos creamos otro bucle que se reptite tantas veces como el piso en el que este, de esta forma agregamos a la variable steps tantos "[-]" como sean necesarios y al final de cada piso concatenamos su valor a la escalera completa "completeLadder" y tambien un '\n' para que haga un salgo de linea en consola. 
Despues de los bucles for anidados y darle el valor a la escalera completa, la mostramos por consola. 
*/