/*
Enunciado ejercicio 2:
Dada una cadena de texto, comprobar si es un palindromo o no.
Los palindromos son palabras que se leen igual aun estado invertidas.
Ejemplos: bob, ana
*/

function palindromo(text){
    let reverse = text.split('').reverse().join('');
    return(reverse === text);

    // Esta es otra manera de que retorne true o false
    /* if(text == reverse){
        return true;
    }else{
        return false;
    } */
}

console.log("Es un palindromo? "+palindromo("Marcos"));

/* 
Explicacion:

Creamos una funcion palindromo que va a recibir en este caso un parametro de tipo String. Dentro de esta funcion creamos una variable reverse que almacena el texto ingresado como parametro y en primer lugar hace un split del texto teniendo en cuenta el parametro que le pasamos, (en este caso separamos el texto en cada caracter ya que usamos las comillas sin ningun valor '') despues hace un reverse lo que da vuelta el orden del array de caracteres que devuelve el split y por ultimo con el metodo join volvemos a concatenar ese array.
Por ultimo comparamos si el texto dado vuelta es igual al texto original usando === que nos devuelve un boolean al igual que con el if y else de abajo, la forma en la que quedo es lo optimo y mas compacto.
*/