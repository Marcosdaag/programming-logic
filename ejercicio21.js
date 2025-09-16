/*
Enunciado ejercicio 21:

Dada una cadena de texto y un numero recortar el string mostrando los X primeros caracteres.
*/

function cut(text, characters){

    let subs = "";

    if(!text || !characters){
        console.log("faltan patametros");
    }else{
        var cutText = text.substring(0,characters);
        subs +=cutText;
    }

    return subs;
}

console.log(cut("hola como estas", 6));

/* 
Explicacion:

Creo una funcion cut que recibe dos parametros, el texto y la cantidad de caracteres que quiero mostrar. Despues creamos una variable subs vacia donde vamos a almacenar el resultado que buscamos y mediante un condicional if nos fijamos si los paramtetros fueron asignados correctamente o no, en caso de que no nos devuelve un mensaje y en caso de que este todo correcto hace un substring del texto desde el caracter con indice cero hasta el caracter que especificamos como segundo parametro.
Por ultimo concatenamos ese substring a la variable subs y retornamos su valor.
*/