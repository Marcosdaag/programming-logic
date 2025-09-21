/*
Enunciado ejercicio 42:

Dado dos numeros, sacar un numero aleatorio entre ellos.
*/

function random(min, max){
    return Math.round(Math.random()*(max - min)+min);
}

console.log(random(1, 10));

/* 
Explicacion:

Creamos una funcion random que recibe dos parametros, un numero para el minimo y otro para el maximo. Despues hacemos simplemente un return que devuelve un numero random multipiclado para que no salga de los valores asignados y con Math.round hacemos que ese numero este redondeado para que sea un numero entero.
*/