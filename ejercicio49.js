/*
Enunciado ejercicio 49:

Dado un objeto, comprobar si existe una propiedad en concreto.
*/

function existProp(obj, prop){
    if(typeof obj == 'object' && typeof prop === "string" && hasOwnProperty.call(obj, prop)){
        return true; 
    }

    return false;
}

let user = {
    nombre: "Marcos",
    apellido: "Aguirre"
}

console.log(existProp(user, "nombre"));

/* 
Explicacion:

Creo una funcion existProp que recibe como parametros un objeto y una propiedad en forma de string. Primero, verifico si el primer parametro es un objeto y el segundo es una cadena de texto. Luego, utilizo el metodo hasOwnProperty para comprobar si la propiedad existe en el objeto. Si ambos chequeos son verdaderos, retorno true. Si no, retorno false.
*/