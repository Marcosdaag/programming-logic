/*
Enunciado ejercicio 33:

Haz un reloj que en tiempo real vaya mostrando la hora a cada segundo.
Solo puedes uasr el objeto date para obtener la hora por primera vez, pero no para actualizarla.
*/

class Clock{

    constructor(){
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    }

    update(seconds){
        this.seconds += seconds;

        // Actualizar los segundos
        if(seconds >= 60){
            this.minutes++;
            this.seconds = 0;
        }

        // Actualizar los minutos
        if(this.minutes >= 60){
            this.hours++;
            this.minutes = 0;
        }

        // Actualizar las horas
        if(this.hours >= 24){
            this.hours = 0;
        }
    }

    show(){
        this.update(1);
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    setOn(){
        setInterval(()=>{
            this.show();
        },1000);
    }

}

let myClock = new Clock();

myClock.setOn();

/* 
Explicacion:

Creamos una clase clock y definimos sus propiedades dentro del constructor y les damos su valor. A continuacion creamos una funcion update que tiene la logica para establecer el tiempo correctamente segun que tantos segundos hayan pasado, despues creamos la funcion show que usa la logica de la funcion anterior y le pasa como parametro 1 para que sume un segundo cada vez que itera y por cada iteracion muestro por consola el tiempo actual.
En ultimo lugar creo una funcion a la cual le agrego un setInterval que ejecuta la funcion show cada 1000ms osea un segundo.
Creo un objeto tipo Clock que se llama myClock y despues ejecuto la funcion setOn para que funcione.
*/