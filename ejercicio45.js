/*
Enunciado ejercicio 45:

Dado un array de alumnos, nombre y nota, mostrar cuantos alumnos han aprobado y cuantos reprobado.
*/

function approvedStudents(students) {
    let approved = 0;
    let disapproved = 0;
    for (student of students) {
        if (student.note >= 4) {
            approved++;
        } else {
            disapproved++;
        }
    }

    return `Aprobados: ${approved}, Reprobados: ${disapproved}`;
}

console.log(approvedStudents([{ name: "Juan", note: 5 }, { name: "Maria", note: 3 }, { name: "Pedro", note: 4 }]));

/* 
Explicacion:

Creo una funcion approvedStudents que recibe como parametro un array de objetos, donde cada objeto representa a un alumno con su nombre y nota. Creo dos variables, approved y disapproved, inicializadas en 0, para contar la cantidad de alumnos aprobados y reprobados.
Luego, recorro el array de alumnos con un for of, y por cada alumno, verifico si su nota es mayor o igual a 4. Si es asi, incremento la variable approved en 1, de lo contrario, incremento la variable disapproved en 1.
*/