/*
Enunciado ejercicio 50:

Dado un numero, devolver cuantos bucles tiene.
*/

function bucle(number){
    let arrayNum = number.toString().split('');
    let bucles = 0;

    for(element of arrayNum){
        element = parseInt(element);
        if(element === 0 || element === 6 || element === 9){
            bucles ++;
        }else if(element === 8){
            bucles += 2;
        }
    }
    
    return bucles;
}

console.log(bucle(28891)); 

/* 
Explicacion:

Creo una funcion bucle que recibe como parametro un numero. Primero, convierto el numero a una cadena de texto y luego lo divido en un array de caracteres utilizando el metodo split. Inicializo una variable bucles en 0 para contar la cantidad de bucles. Luego, recorro el array de caracteres con un bucle for of. Por cada caracter, lo convierto de nuevo a un numero entero utilizando parseInt. Verifico si el numero es 0, 6 o 9, en cuyo caso incremento la variable bucles en 1. Si el numero es 8, incremento la variable bucles en 2, ya que el 8 tiene dos bucles. Finalmente, retorno la cantidad total de bucles.
*/