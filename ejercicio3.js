/*
Enunciado ejercicio 3:

Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parametros de una funcion.
*/

function searchText(phrase, coincidence){
    let cleanText = phrase.toLowerCase().replace(/[!.,-]/gi,'');
    let result = 0;

    if(cleanText.includes(coincidence)){
        let words = cleanText.split(" ");
        let map = {};

        for(let word of words){
            if(map[word]){
                map[word]++;
            }else{
                map[word] = 1;
            }
        }

        result = map[coincidence];

    }else{
        result = 0;
    }

    return result;
}

console.log(searchText("Hola mi nombre es Marcos y estoy haciendo la practica numero tres", "marcos"));

/* 
Explicacion:

Creamos la funcion searchText que recibe dos parametros, en este caso es la frase en la que queremos buscar las coincidencias y como segundo parametro agregamos la palabra que queremos buscar.
Creamos dos variables, la primera cleanText para pasar el primer parametro (la frase) todo a minusculas y reemplazamos todos los simbolos o caracteres extras que queramos por un espacio vacio de manera global en toda la frase.
Despues comprobamos si ese texto incluye el segundo parametro que seria la palabra a buscar y si la incluye separa las palabras por un espacio y despues en un bucle compara todas esas palabras y si encuentra una coincidencia le suma uno al contador.
Por ultimo le damos el valor al resultado segun cuantas coincidencias encontro y retornamos ese mismo valor (en caso de no haber coincidencias salta el bucle y da como valor 0 porque pasa directamente al else).
*/