/*Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo. */

var edad = prompt("Ingrese su edad");
/*
if (edad >= 18) {
    alert("Usted es mayor de edad...");
}else{
    alert("Usted NO es mayor de edad...");
}
*/
//Expresion ternaria
(edad >= 18) ? alert("Usted es mayor de edad...") :alert("Usted NO es mayor de edad...");