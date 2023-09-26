/*Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
muestre el siguiente array [6, 9, 12, 15, 18].*/

var a = [[3], [6], [9], [12], [15]];
console.log(a);

var b = a.flatMap((num) => (Number(num)+3))

console.log(b);

