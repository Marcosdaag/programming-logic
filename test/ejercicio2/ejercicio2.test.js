const palindromo = require("./ejercicio2");

test("Comprobar si la funcion palindromo esta definida", ()=>{
    expect(palindromo).toBeDefined();
});

test("Es un palidromo", ()=>{
    expect(palindromo("otto")).toEqual(true);
})

test("No es un palidromo", ()=>{
    expect(palindromo("marcos")).toBe(false);
});