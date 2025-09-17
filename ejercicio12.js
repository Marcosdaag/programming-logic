/*
Enunciado ejercicio 12:

Dado un numero, mostrar todos los numeros desde ese al 0 restando de 8 en 8 en una lista con guiones donde cada numero debe empezar por N.
*/

function toCero(number){
    let result = `--- Del ${number} al 0 --- \n`;

    while(number>0){
        result += `- nº${number} \n`;
        number -= 8;
    }

    result += "---FIN---"

    return result;
}

console.log(toCero(100));

/* 
Explicacion:

Creo una funcion toCero que recibe como parametro un numero, despues inicializo la variable result con un template donde le doy un titulo a la lista de numeros a devolver.
Despues hago un bucle while para que siempre que nuestro numero sea mayor a cero siga iterando y por cada iteracion concateno a result el numero por el que va y le resto ocho. Una vez que el bucle termina le concateno FIN y retorno la variable result que podemos ver con el console.log de abajo.
*/