/*Realizar un programa en JavaScript donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.*/

//el primero será un arreglo A de 50 números reales
var a = new Array();
for (let i = 0; i < 50; i++) {
    a[i]=(Number(Math.random().toFixed(2)));
}
console.log(a);

//y el segundo B, un arreglo de 20 números, también reales.
var b = new Array();

//Ordenando vetor "a" de menor a mayor
a.sort();
console.log(a);

//copiar los primeros 10 números ordenados al arreglo B de 
//20 elementos, y rellenar los 10 últimos elementos con el valor 0.5
for (let i = 0; i < 10; i++) {
    b[i]=a[i];
}
for (let i = 10; i < 20; i++) {
    b[i]=0.5;
    
}

console.log(b);
