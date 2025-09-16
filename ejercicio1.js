/* 
Enunciado ejercicio 1:

Dado un numero, devolver su tabla de multiplicar completa.
*/

function multiplyTable(number){
    console.log(`Tabla de multiplicar del ${number}`);
    for(var i = 0; i<=10; i++){
        console.log(`${number} x ${i} = ${number*i}`);
    }
}

multiplyTable(5);

/* 
Explicacion:

Creamos una funcion a la que le vamos a dar un parametro, en este caso un numero. Despues creamos un texto en consola (puede ser un texto dentro de una app o una web, etc) donde decimos la tabla de que numero se va a mostrar a continuacion.
Por ultimo creamos un bucle for con limite de 10 iteraciones para que en cada una de esas imprima por consola una plantilla creada con la comillas invertidas `` donde muestra el numero ingresado x i que seria el numero actual de la iteracion del bucle.
*/