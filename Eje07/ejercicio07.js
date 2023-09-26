/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial. */

var limite = prompt("Ingrese un número límite positivo");
var suma = 0;
var numero = 0;

do{
    numero = prompt("Ingrese un número");
    suma = Number(suma) + Number(numero);
    alert(`Van ${suma} acumulados`);
}while(suma <= limite)

alert(`Lo conseguiste ${suma} > ${limite}`);



