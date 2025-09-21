/*
Enunciado ejercicio 44:

Dado un array de strings, devolver otro con los valores que esten froamdos por mas de dos palabras.
*/

function twoWords(elements){
    let newElements = [];

    for(element of elements){
        if(element.split(' ').length >= 2){
            newElements.push(element);
        }
    }

    return newElements;
}

console.log(twoWords(["hola", "hola como estas"]));

/* 
Explicacion:

Creo una funcion twoWords que recibe como parametro un array de strings, y creo un array vacio newElements donde voy a guardar los elementos que cumplan la condicion.
Luego, recorro el array con un for of, y por cada elemento, lo divido en un array de palabras con el metodo split(' '), y si la longitud de ese array es mayor o igual a 2, significa que el elemento tiene mas de dos palabras, por lo que lo agrego al array newElements con el metodo push.
*/