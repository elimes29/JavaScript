/*Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado*/


var vector1 = new Array();
var vector2 = new Array();
var vector3 = new Array();
var vector4 = new Array();


for (let i = 0; i < 5; i++) {
    vector1[i]=(Math.floor(Math.random()*10));
    vector2[i]=(Math.floor(Math.random()*10));
}
vector3 = [...vector1];
vector4 = [...vector2];

for (let i = 0; i < 2; i++) {
    vector3.pop();  
    vector4.pop();
}

alert(`Los vectores creados aleatoreamente y al mismo tiempo fueron
V1 [${vector1}]
V2 [${vector2}]
Luego de eliminar los dos últimos elementos quedaron
V1 [${vector3}]
V2 [${vector4}]`);

