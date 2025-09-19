/*
Enunciado ejercicio 36:

Dado un texto, devolver cuantas consonantes y cuantas vocales tiene.
*/

function charCount(texto) {
    let vocals = texto.replace(/[^aáAÁeéEÉiíIÍoOóÓuúUÚ]/gi, '').length;
    let consonants = texto.replace(/[" "/aáAÁeéEÉiíIÍoOóÓuúUÚ]/gi, '').length;
 
    let result = `El numero de vocales es: ${vocals} y el numero de consonantes es: ${consonants}`;
 
    return result;
}
 
 
console.log(charCount("Holá PruebA de REplacé y/o JÁvascrípt"));

/* 
Explicacion:

Creamos una funcion charCount que recibe como parametro un texto y meadinte dos variables y expreciones regulares cuento la cantidad de vocales y consonantes que hay, por ultimo en un template string dentro de result asigno el resultado y lo retorno.
*/