/*
Enunciado ejercicio 41:

Dado un numero, mostar un triangulo de asteriscos con ese numero de filas.
*/

function triangle(number) {
  let spaces = " ";
  let ast = "*";
  for (let i = 1; i <= number; i++) {
    console.log(
      spaces.repeat(number - i) +
        (i === 1 ? ast.repeat(i) : ast.repeat(i + (i - 1))) +
        spaces.repeat(number - i)
    );
  }
}

triangle(7);

/* 
Explicacion:

Creo una funcion triangle que recibe como parametro un numero, despues inicializo dos variables, spaces y ast.
Mediante un bucle for itero la cantidad de veces como fueron asignadas por parametro, en cada una de esas iteraciones, hago un console.log que primero repite los espacios necesarios, despues la cantidad de esteriscos como son necesarios y al final otra vez los espacios correspondientes.
*/