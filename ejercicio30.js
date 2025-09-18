/*
Enunciado ejercicio 30:

Dado un array de numeros, devolver el array sin elementos duplicados y si hay un string eliminarlo del array.
*/

function converter(array1) {

    // Funcion de flecha dentro de la funcion filter, nos permite recorrer cada elemento del array y devolver solamente los que coincidan con nuestra busqueda, en este caso los elementos que sean numeros.
    array1 = array1.filter(element => {
        return typeof element === "number";
    });

    let setNoDuplicates = new Set(array1);

    return Array.from(setNoDuplicates);

}

console.log(converter([5, 6, 4, 1, 1, "hola"]));

/* 
Explicacion:

Creo una funcion converter que recibe un array como parametro, lo primero que hacemos es filtrar el array y eliminar cualquier dato que no sea de tipo number y despues usando new Set creamos un grrpo de elementos no duplicados del array filtrado.
Por ultimo con Array.from volvemos a generar un array de elementos y retornamos ese valor.
*/
