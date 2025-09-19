/*
Enunciado ejercicio 38:

Dado un numero, mostrar listado de todos los cuadrados de todos los numeros naturales hasta llegar al mismo.
*/

function square(number){
    return number*number;
}

function show(number){
    for(let i=0; i<=number; i++){
        console.log(square(i));
    }
}

show(5);

/* 
Explicacion:

Creo una funcion square que devuelve el cuadrado del parametro que le pasemos. Despues creo una funcion show que ejecutr aun bucle que itera la cantidad de veces que le asignemos como parametros y en cada una de esas iteraciones muestra por consola el cuadrado del numero.
*/