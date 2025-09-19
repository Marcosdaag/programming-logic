/*
Enunciado ejercicio 34:

Dados dos numeros devolver los resultados de las operaciones basicas entre ellos.
*/

function calculator(number1, number2){
    let result = `
        La suma es ${number1+number2}
        La resta es ${number1-number2}
        La multiplicacion es ${number1*number2}
        La division es ${number1/number2}
    `;

    return result;
}

console.log(calculator(5, 10));

/* 
Explicacion:

Creo una funcion calculator que recibe como parametro dos numeros, a continuacion creo una variable result co un template string donde hago cada una de las operaciones y retorno el valor de la variable result.
*/