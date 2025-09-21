/*
Enunciado ejercicio 48:

Dado un string, devolver cuales son las letras que aparecen una sola vez y cual es la primera.
*/

function letrasUnicas(str) {
    let letras = {};
    for (let i = 0; i < str.length; i++) {
        let letra = str[i]; 
        if (letras[letra]) {    
            letras[letra]++;        
        } else {    
            letras[letra] = 1;      
        }
    }

    let letrasUnicas = [];
    for (let letra in letras) {
        if (letras[letra] === 1) {
            letrasUnicas.push(letra);
        }   
    }

    return letrasUnicas.length > 0 ? letrasUnicas[0] : null;
}
console.log(letrasUnicas("hoolla ccomo estan?")); 

/* 
Explicacion:

Creo un objeto "letras" para contar la frecuencia de cada letra en el string. Recorro el string y para cada letra, incremento su contador en el objeto "letras". Luego, creo un array "letrasUnicas" para almacenar las letras que aparecen solo una vez. Recorro el objeto "letras" y si una letra tiene un contador de 1, la agrego al array "letrasUnicas".
Finalmente, devuelvo la primera letra del array "letrasUnicas" o null si no hay letras unicas.
*/