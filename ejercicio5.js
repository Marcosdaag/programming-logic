/*
Enunciado ejercicio 5:

Crear una funcion que responda lo siguiente, cuanto es el X porcentaje de X numero.
*/

function percent(percent, number){
    var result = (number*percent)/100;
    // Esta es otra forma de calcularlo var result = (number*(percent/100));
    console.log(`El %${percent} de ${number} es ${result}`);
}

percent(10, 2000);

/* 
Explicacion:

Cree una funcion que recibe como parametros tanto el porcentaje que quiere y el numero del que quiere saber ese porcentaje, despues cree la variable result donde aplicando una regla de tres simple saco lo que el usuario solicita y lo concateno en un texto dentro de un console.log
*/