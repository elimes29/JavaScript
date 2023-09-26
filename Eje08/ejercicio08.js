/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos. */

var numero, suma=0, contador=0, lista = new Array();

while(Number(numero) != 0){
    numero = prompt("Ingrese un número");
    lista.push(Number(numero));
    suma = suma + Number(numero);
    contador++;
}
/*
var promedio = suma/contador;
max = Math.max(...lista);
min = Math.min(...lista)
*/
alert(`El número máximo ingresado fue ${Math.max(...lista).toFixed(2)}
El número mínimo ingresado fue ${Math.min(...lista).toFixed(2)}
El promdio es ${(suma/contador).toFixed(2)}`);




