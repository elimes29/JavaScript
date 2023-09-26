/*Escribir una función flecha que reciba una palabra y la devuelva al revés.*/

var palabraEntrada = prompt("Ingrese una palabra").split("");
//Funcion normal...
function vuelta (palabraIn) {return palabraIn.reverse().join("");};
alert("Volteo desde Funcion TRADICIONAL = " + vuelta(palabraEntrada));


palabraEntrada = prompt("Ingrese otra palabra").split("");
//Funcion anónima
palabraSalida = function(palabraIn){return palabraIn.reverse().join("")};
alert("Volteo desde Funcion ANÓNIMA = "+palabraSalida((palabraEntrada)));



palabraEntrada = prompt("Ingrese la ultima palabra").split("");
//Funcion flecha
//let vecPalabra = palabraEntrada.split("");
palabraSalidaFlecha = palabraIn => palabraIn.reverse().join("");
alert("Volteo desde Funcion FLECHA = "+palabraSalidaFlecha(palabraEntrada));

