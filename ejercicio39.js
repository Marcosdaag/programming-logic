/*
Enunciado ejercicio 39:

Dado un texto, comprobar que sea un email valido.
*/

function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.log(validateEmail("marcos@hotmail.com"));

/* 
Explicacion:

Creamos una funcion para validar el email mediante expresiones regulares y retornamos el valor que devuelve true o false.
*/