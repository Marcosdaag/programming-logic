/*
Enunciado ejercicio 19:

Dado un array de objetos de peliculas (titulo, director, vista) mostrar todas las peliculas indicando cual has visto y cual no.
*/

function myMovies(movies){
    for(movie of movies){
        let show = `"${movie.title}" de ${movie.director}`;

        if(movie.showed){
            console.log("Ya has visto ", show);
        }else{
            console.log("No has visto ", show);
        }
    }

    return movies;
}

const moviesCollection = [
    {
        title: 'Batman',
        director: 'Peter Jackson',
        showed: false
    },
    {
        title: 'Jumanji',
        director: 'Jhon Snow',
        showed: true
    },
    {
        title: 'Lego',
        director: 'Harry Styles',
        showed: false
    }
];

console.log(myMovies(moviesCollection));

/* 
Explicacion:

Creo una funcion myMovies que recibe peliculas como parametro, despues hago un bucle for para que capture los valores de cada pelicula dentro de movies que hace referencia al parametro que le asigne.
Despues con un if, compruebo si la propiedad showed de la pelicula es true imprimo por consola que ya vi la pelicula, y en caso de que no, no. Por ultimo hago un return de movies que seria el parametro que asignamos.
Abajo tengo un array de peliculas como ejemplo.
*/