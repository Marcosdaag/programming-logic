/*
Enunciado ejercicio 15:

Dada una cadena de texto, devolver el caracter mas usado.
*/

function commonChar(text){
    let mapChar = {};
    let max = 0;
    let maxRepeatCharacter = "";

    for(let char of text){

        if(!mapChar[char]){
            mapChar[char] = 1;
        }else{
            mapChar[char] ++;
        }
    }

    for(character in mapChar){
        if(mapChar[character] > max){
            max = mapChar[character];
            maxRepeatCharacter = character;
        }
    }

    return maxRepeatCharacter;
}

console.log(commonChar("que letra es la que mas se repite en este texto"));

/* 
Explicacion:

Creamos una funcion commonChar la cual recibe un parametro de texto, despues inicializamos 3 variables, una es un JSON vacio para ir almacenando los caracteres y sus valores, max para almacenar el valor actual de repeticiones del caracter mas usado y por ultimo maxRepeatCharacter para almacenar en forma de string la letra como tal que mas se repite.
Hacemos un bucle for con un OF para sacar el valor de cada caracter del texto, si el caracter no existe en el JSON lo inicializo y en caso de que ya exista le sumo uno a su contador.
Despues recorremos todo el JSON y si la cantidad de veces que se esta repitiendo es mayor a max que esta inicializada en 0, le asigno como valor la cantidad de veces que esa letra se repite, despues de eso la variable maxRepeatCharacter tomar como valor el character el cual esta iterando ese bucle.
Por ultimo retornamos el valor de maxRepeatCharacter aunque tambien podriamos devolver max para saber cuantas veces se repite.
*/