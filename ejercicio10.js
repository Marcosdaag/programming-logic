/*
Enunciado ejercicio 10:

Dado un numero, mostrar una escalera con escalones de "[-]" usando el numero para los niveles de la escalera
*/

function ladder(number){
    let completeLadder = "";

    for(let lvl = 1; lvl<number; lvl++){

        let steps = "";
        for(let step = 1; step <= lvl; step++){
            steps += "[-]"
        }

        completeLadder += steps + '\n';
    }

    console.log(completeLadder);
}

ladder(5);

/* 
Explicacion:

*/