function palindromo(text){
    let reverse = text.split('').reverse().join('');
    return(reverse === text);
}

module.exports = palindromo;