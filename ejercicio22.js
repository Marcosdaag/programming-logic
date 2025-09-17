/*
Enunciado ejercicio 22:

Dado dos numeros, indicar cual es mayor y cual es menor.
*/

function compare(number1, number2){

    let result = "";

    if(number1>number2){
        result += `${number1} es mayor que ${number2}.`;
    }else if(number1==number2){
        result += `${number2} es igual que ${number1}.`;
    }else{
        result += `${number2} es mayor que ${number1}.`;
    }

    return result;
}

console.log(compare(10, 8));

/* 
Explicacion:

Creo una funcion compare que recibe como parametro dos numeros, inicializo una variable result vacia y mediante un condicional if verficamos cual numero es mayor y vamos dandoles distintos tipos de resultados a la variable. Por ultimo retorno el valor de result.
*/