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