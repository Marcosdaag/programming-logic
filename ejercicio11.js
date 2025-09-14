/*
Enunciado ejercicio 11:

Dado un texto y una busqueda, sensurar todas las coincidencias de la busqueda en el texto con [-CENSUDARO-]
*/

function censored(text=false, search=false){
    let result = "";

    if(!text && !search){
        result = "No puedes leer el texto y la busqueda";
    }else if(!text && search){
        result = "No puedes leer el texto";
    }else if(text && !search){
        result = "No puedes hacer la busqueda";
    }else if(text && search){
        result = text.replace(new RegExp(search, 'gi'), "[-CENSUDARO-]");
    }

    console.log(result);
}

censored("hola como estan", "hola");

/* 
Explicacion:

Creo una funcion censored en la que le asigno dos parametros y de manera predeterminada vienen en false, despues de eso creo una variable de result inicializada vacia.
Despues, usando los condicionales y dependiendo si le pasamos los parametros o no, o si solo le pasamos uno le damos a result distintos valores, ya sea que no hay texto y busqueda, no hay texto, no hay busqueda y en caso de que los dos esten asignados hago un replace de manera global en la frase con "new RegExp(search, 'gi')" por "[-CENSUDARO-]" y le damos ese valor a resultado.
*/