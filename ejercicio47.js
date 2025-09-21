/*
Enunciado ejercicio 47:

Dado un array de objetos, devolver cuales son las aficiones mas comunes de los usuarios.
*/

function hobbiesSummary(users) {
    let hobbiesArr = [];
    let map = {};
 
    for (const user of users) {
        const { name, hobbies } = user;
        hobbiesArr = [ ...hobbiesArr, ...hobbies ];
    }
    for (let i = 0; i < hobbiesArr.length; i++) {
        if (hobbiesArr[i] in map) {
            map[hobbiesArr[i]]++;
        } else {
            map[hobbiesArr[i]] = 1;
        }
    }
 
    return map;
}

console.log(hobbiesSummary([
    { name: "Juan", hobbies: ["futbol", "tenis", "piano"] },
    { name: "Maria", hobbies: ["piano", "guitarra", "tenis"] },
    { name: "Pedro", hobbies: ["futbol", "guitarra", "ajedrez"] }
]));

/* 
Explicacion:

Creo una funcion hobbiesSummary que recibe como parametro un array de objetos, donde cada objeto representa a un usuario con su nombre y un array de aficiones. Creo un array hobbiesArr vacio para almacenar todas las aficiones y un objeto map vacio para contar la frecuencia de cada aficion. Luego, recorro el array de usuarios con un for of, y por cada usuario, extraigo su nombre y aficiones utilizando destructuracion. Utilizo el operador de propagacion para agregar todas las aficiones del usuario al array hobbiesArr.
Despues, utilizo un bucle for para recorrer el array hobbiesArr. Por cada aficion, verifico si ya existe en el objeto map. Si existe, incremento su valor en 1. Si no existe, la agrego al objeto map con un valor inicial de 1.
Por ultimo, retorno el objeto map que contiene las aficiones como claves y su frecuencia como valores.
*/