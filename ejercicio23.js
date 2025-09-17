/*
Enunciado ejercicio 23:

Dada una cadena de texto, poner en mayuscula la primera letra de cada palabra y luego devolver la cadena.
*/

function upper(text){
    let result = "";
    
    for(character in text){

        if(text[character-1] === " "){
            result += text[character].toUpperCase();
        }else{
            result += text[character];
        }

    }

    return result;
}

console.log(upper("Hola como estan"));

/* 
Explicacion:

Creo una funcion upper y le doy como parametro un texto, despues creo una variable result inicializada vacia y mediante un bucle for itero sobre cada caracter dentro del texto. En cada una de esas iteraciones hago una comprobacion que busca el caracter anterior al actual y se fija si es un espacio, si lo es lo pasa a mayuscula y lo agrega a resultado y en caso de que no lo sea unicamente lo agrega a resultado tal y como esta.
Por ultimo retorno el valor de result.
*/