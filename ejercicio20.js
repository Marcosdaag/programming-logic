/*
Enunciado ejercicio 20:

Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si.
*/

function cleanText(text){
    return text.replace(/[^\W]/gi, '').toLowerCase().split('').sort().join('');
}

function anagram(text1, text2){
    return cleanText(text1) === cleanText(text2);
}

console.log(anagram("hola", "hoal"));

/* 
Explicacion:

Creo una primer funcion para formatear los textos, primero reemplazo de manera global todo lo que no sean palabras por un espacio vacio '', despues paso todo a minusculas y hago un split de cada letra, a continuacion hago un sort para ordenar el array y con el metodo join las vuelvo a unir.
Creo una segunda funcion que retorna un boolean al comprobar si aplicando la funcion cleanText al primer y al segundo texto devuelve el mismo valor.
De esta forma podemos comprobar si los textos son anagramas.
*/