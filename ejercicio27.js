/*
Enunciado ejercicio 27:

Dado un numero, mostrar a cuantos años, meses y dias equivale.
*/

function calculateDays(days) {
    result = "";
    var year = 0;
    var month = 0;
    var day = 0;

    for (var i = 0; i < days; i++) {
        if (day < 30) {
            day++;
        } else if (day == 30) {
            day = 1;
            if (month < 12) {
                month++;
            } else {
                month = 1;
                year++;
            }
        }
    }

    if (days < 30) {
        result = `Ingresaste ${days} dias, ingresa un valor superior a 30`;
    } else if (year == 0) {
        result = `${days} dias equivalen a ${month} meses y ${day} dia/s`;
    } else if (year >= 1) {
        result = `${days} dias equivalen a ${year} año/s, ${month} mes/es y ${day} dia/s`;
    }

    return result;
}

console.log(calculateDays(61));

/* 
Explicacion:

Creo una funcion calculateDays que recibe un numero como parametro, despues de eso creo cuatro variables, una para el resultado y 3 para definir el valor inicial de year, month y day.
Con un bucle for itero la misma cantidad de veces que el numero que asigne por el parametro y con un if else anidado para que al llegar al limite de 30 dias o 12 meses sume sus respectivos valores.
Por ultimo dependiendo si la cantidad de dias llega al año, a los meses o inlcuso no llegan al mes se va a dar un reaultado u otro.
*/