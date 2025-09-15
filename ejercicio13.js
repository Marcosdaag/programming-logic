/*
Enunciado ejercicio 13:

Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique su tamaño.
*/

function divide(arrayLong, size){
    let arrayIn = [];

    for(let element of arrayLong){
        let last = arrayIn[arrayIn.length - 1];

        if(!last || last.length === size){
            arrayIn.push([element]);
        }else {
            last.push(element);
        }
    }

    return arrayIn;
}

console.log(divide([5,10,5,60,8,10], 2));

/* 
Explicacion:

Creo una funcion divide que recibe como parametro un array de elementos y la cantidad de elementos que quiero que haya en cada uno de los subarrays.
Inicializo una varaible arrayIn que ya de por si es un array al que vamos a agregar arrays dentro y mediante un bucle for por cada elemento dentro del array principal hago una iteracion. 
Creo una variable last para restarle un slot a arrayIn para que realmente meta la cantidad de elementos que le pasemos a la funcion ya que los arrays se inicializan en 0 y al restarle uno va a respetar el parametro que le asignemos. Despues de eso creamos una condicion en la que si no hay mas espacio en el array anterior  y si size es el que asignamos, creamos  un nuevo array y pusheamos el elemento que se esta iterando y en caso de que el array siga teniendo slots disponibles con un ELSE hacemos un push al array actual.
Por ultimo devolvemos el valor de arrayIn que contiene los sub arrays.
*/