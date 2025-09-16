/*
Enunciado ejercicio 17:

Dado un numero, mostrar los numeros de 1 hasta el numero.
Pero para los multiplos de tres imprimir "buzz" en lugar del numero y para los multiplos de cinco imprimir "ligth".
Para los multiplos de tres y cinco imprimir "buzzligth".
*/

function multiplies(numberChoice){
    var result = "";
    for(var i = 1; i<= numberChoice; i++){
        if(i%3==0 && i%5==0){
            result += "buzzligth, "; 
        }else if(i%3==0){
            result += "buzz, ";
        }else if(i%5==0){
            result += "ligth, ";
        }else{
            result += i+", "; 
        }
    }

    return result;
}

console.log(multiplies(20));

/* 
Explicacion:

Creo una funcion multiplies que recibe como parametro un numero, despues inicilizo la variable result vacia y mediante un bucle for itero la cantidad de veces necesarias para recorrer todos los numeros desde el uno hasta el que nosotros le asignamos. Despues usando un condicional if compruebo si un numero es multiplo de ambos numeros y concateno al result la palabra "buzzligth", despues hago lo mismo para los otros dos casos y por ultimo si no es multiplo de ninguno simplemente concateno el valor de la iteracion actual. 
Como final retorno el valor de result.
*/