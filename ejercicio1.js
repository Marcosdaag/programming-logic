/* 
Enunciado ejercicio 1:
Dado un numero, devolver su tabla de multiplicar completa.
*/

function multiplyTable(number){
    console.log(`Tabla de multiplicar del ${number}`);
    for(var i = 0; i<=10; i++){
        console.log(`${number} x ${i} = ${number*i}`);
    }
}

multiplyTable(5);