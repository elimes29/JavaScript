/*Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. */

var siNo = prompt("Ingrese 'S' o 'N'","S");

/*
if (siNo.toUpperCase() == "S" | siNo.toUpperCase() == "N"){
    alert("Correcto");
}else{
    alert("Incorrecto");
}
*/

//If ternario
(siNo.toUpperCase() == "S" | siNo.toUpperCase() == "N") ? alert("Correcto") : alert("Incorrecto");


