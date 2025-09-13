/*
Enunciado ejercicio 7:
Dado dos numeros, devolver cuantos numeros IMPARES hay entre ellos
*/

function odd(number1, number2){
    for(var i = number1; i<number2; i++){
        if(i%2 != 0){
            console.log(`${i} es impar.`)
        }else{
            
        }
    }
}
 
odd(10,20);

/* 
Explicacion:

Creo una funcion ODD donde le doy como parametros los dos numeros entre los que quiero buscar sus impares intermedios, despues creo un bucle for que recorres desde el primer numero hasta el segundo y en cada una de sus iteraciones compara el resto de su divison por 2, entonces si su resultado es distinto a 0 es un numero impart el cual mostramos por consola.
*/