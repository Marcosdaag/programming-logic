/*
Enunciado ejercicio 6:

Dibujar un cuadrado hueco con asteriscos.
*/

function square(num){
    for(let i = 0; i < 2; i++){
        console.log('*'.repeat(num));
        if ( i === 0 ) {
            for(let x = 0; x < num-2; x++){
                console.log('*' + ' '.repeat(num-2) + '*');
            }
        }
    }
}
 
square(10);

/* 
Explicacion:

En esta funcion asignamos un parametro que define la cantidad de asteriscos que se van a pintar por cada lado y lo dibujamos dentro de la consola.
*/