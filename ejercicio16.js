/*
Enunciado ejercicio 15:

Dada una cadena de texto, cuantas vocales tiene.
*/

function vocals(text){
    let coincidence = text.match(/[aeiou]/gi);
    console.log(coincidence.length);
}

vocals("hola como estas");

/* 
Explicacion:

Creo una funcion vocals la cual recibe un texto como parametro, despues creo una variable que almacena con la funcion .match todas las coincidencias que tenga el texto segun lo que queramos buscar (en este caso [aeiou]) de manera global y por ultimo hace un console.log de la cantidad de elementos que almaceno esa variable.
*/