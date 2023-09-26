/*Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/


var vector1 = new Array();
var vector2 = new Array();

for (let i = 0; i < 5; i++) {
    vector1[i]=(Math.floor(Math.random()*10));
    vector2[i]=(Math.floor(Math.random()*10));
}


alert(`Los vectores creados aleatoreamente y al mismo tiempo fueron
V1 [${vector1}]
V2 [${vector2}]`);