/*
Enunciado ejercicio 33:

Haz un reloj que en tiempo real vaya mostrando la hora a cada segundo.
Solo puedes uasr el objeto date para obtener la hora por primera vez, pero no para actualizarla.
*/

class clock{

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

    on(){
        
        setInterval(()=>{
            this.show();
        },1000);
    }

}

/* 
Explicacion:

*/