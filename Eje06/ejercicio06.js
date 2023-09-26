/*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.*/

var a = prompt("Ingrese un número");

if (a == 0) {
    alert(`${a} no es par ni impar`);
} else if ((a % 2) == 0) {
    alert(`${a} es un número par`);
} else {
    alert(`${a} es un número impar`);
}
