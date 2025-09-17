/*
Enunciado ejercicio 25:

Dado un string, ponerlo por completo en mayusculas o minusculas en funcion del porcentaje de mayusculas o minusculas del string original.
*/

function upperLower(text){
    let result = "";
    let countMayus = 0;
    let countMin = 0;

    for(character of text){
        if(/[A-Z]/.test(character)){ // Con la expresion regular "/[A-Z]/.test" busca si coincide con un caracter en MAYUSCULA de la A a la Z
            countMayus ++;
        }else{
            countMin ++;
        }
    }

    if(countMayus > countMin){
        result = text.toUpperCase();
    }else{
        result = text.toLowerCase();
    }

    return result;
}

console.log(upperLower("hola COmo Estan"));

/* 
Explicacion:

Creo una funcion upperLower que recibe un texto como parametro, inicializo dos contadores para la cantidad de mayusculas y minusculas que tenga el texto y una variable result para cambiar el resultado dependiendo de la comprobacion. 
Mediante un bucle for saco el valor de cada caracter del texto y con un condicional if y una expresion regular verifico si es o no una mayuscula de la A a la Z, dependiendo del resultado de cada caracter le suma uno al contador de mayusculas o minusculas en cada iteracion.
Por ultimo dependiendo de que variable tenga un mayor valor modifico el texto y lo asigno a result, el cual posteriormente retorno su valor.
*/