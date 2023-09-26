/*Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/
/*
var frase = prompt("Ingrese una frase");
var fraseArray = frase.split(" ");//convertimos el string en vector por cada palbra
*/
var fraseArray = (prompt("Ingrese una frase")).split(" ");
var longArray = new Array();//creamos un vector donde colocaresmos la lonitud de cada elemento
for (const palabra of fraseArray) {//en este for recorremos el vector y uardamos la lonitud de cada palabra
    longArray.push(palabra.length);
}

alert(`La palabra más larga de la frase introducida es: "${fraseArray[longArray.indexOf(Math.max(...longArray))]}"`);//Ubicamos el max del vector lonitud, ubicamos el indice
//que corresponde con esa longitud y ntramos con ese índce en el vector de palabras