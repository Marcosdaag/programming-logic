/*
Enunciado ejercicio 4:

Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres sin usar metodos propios del lenguaje, solo estructuras de control.
*/

function reverse(text){
    let reversed = "";

    for(let char of text){
        reversed = char + reversed
    }

    return reversed;
}

console.log(reversed);

/* 
Explicacion:

Creamos una funcion reverse que recibe como parametro un texto. Creamos una variable reversed inicializada sin ningun caracter y despues en un bucle for iteramos cada caracter del texto que le pasamos como parametro (la diferencia entre usar OF-IN en el condicional del bucle es que OF devuelve el valor de la posicion dentro del array que esta recorriendo a diferencia de IN que devuelve el index del elemento). En cada una de esas iteraciones le agregamos el character actual al reversed anterior por lo que va a estar agregando el nuevo caracter al que ya estaba previamente, por lo que de esta manera queda el texto invertido.
*/