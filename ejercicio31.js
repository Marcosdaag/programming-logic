/*
Enunciado ejercicio 31:

Dado un numero, indicar que tipo de angulo es.
*/

function angle(degree){
    result = "";

    if(degree < 90 && degree > 0){
        result = `${degree} grados se considera agudo`;
    }else if(degree == 90){
        result = `${degree} grados se considera recto`;
    }else if(degree > 90 && degree < 180){
        result = `${degree} grados se considera obtuso`;
    }else if(degree == 180){
        result = `${degree} grados se considera llano`;
    }else if(degree > 180 && degree < 360){
        result = `${degree} grados se considera concavo`;
    }else if(degree == 360){
        result = `${degree} grados se considera completo`;
    }

    return result;
}

console.log(angle(90));

/* 
Explicacion:

Creo una funcion angle que recibe un numero como parametro y con condicionales if voy dandole distintos tipos de valores a la variable result dependiendo del numero ingresado por el usuario.
*/