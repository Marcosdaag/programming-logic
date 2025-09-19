/*
Enunciado ejercicio 37:

Dado un array o un texto, devolver el elemento o palabra que mas aparece.
*/

function repeatElement(fact){
    let map = {};
    let mostRepeat = 0;
    let value;

    if(typeof fact === "string"){
        fact = fact.split(" ");
    }

    for(let element of fact){
        if(map[element]){
            map[element]++;
        }else{
            map[element]=1;
        }
    }

    for(element in map){
        if(map[element] >= mostRepeat){
            mostRepeat = map[element];
            value = element;
        }
    }

    return {
        mostRepeat: mostRepeat,
        value: value
    }
}

console.log(repeatElement("hola como estan hola"));

/* 
Explicacion:

La funcion repeatElement recibe un array o string, cuenta cuantas veces aparece cada elemento/palabra y devuelve un objeto con el valor mas repetido y la cantidad de repeticiones.
*/