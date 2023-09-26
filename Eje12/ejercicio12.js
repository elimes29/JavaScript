/*Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.*/


//var dato = { color : "azul", sexo : "M", mascota : "true"};//objeto 
//var dato = [1,3,"mata"];//objeto array
//var dato = 12;//numero
//var dato = "Hola";//String
var dato = false; //boolean

//Función tradicional
function tipoDato (argumento){
    return typeof(argumento);
}
/*
var tipoDato = argumento => typeof(argumento); 
*/
alert(tipoDato(dato));