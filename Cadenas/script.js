//variable con texto 
let texto = "Aquí va una frase que me permitirá ver cómo funciona el ejercicio de cadenas"
let texto2 = texto.toUpperCase();
let texto3 = texto.replace("frase", "fresitaaa");

//document
document.getElementById('Cadena').innerHTML= texto;
document.getElementById('Cadena2').innerHTML = texto2;
document.getElementById('Cadena3').innerHTML = texto3;

//consola
//console.log(texto.length);
//console.log(texto.at(10));
console.log(texto.toUpperCase());
