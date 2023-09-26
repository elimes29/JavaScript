/*Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/

//Con funcion constructora
function Persona(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}
var p1 = new Persona("Elimes Rodríguez", 39, "Hombre", 80, 1.67);//instancias el objeto con la funcion constructora
//mostrando en consola
console.log(p1.nombre);
console.log(p1.edad);
console.log(p1.sexo);
console.log(p1.peso);
console.log(p1.altura);
console.log("\n");

//Creando el obeto de forma explícita
var p2 = new Object();
p2.nombre = "Dionelys Barazarte";
p2.edad = 33;
p2.sexo = "Mujer"
p2.peso = 60;
p2.altura = 1.56;
//mostrando en consola
console.log(p2.nombre);
console.log(p2.edad);
console.log(p2.sexo);
console.log(p2.peso);
console.log(p2.altura);
console.log("\n");

//Otra forma explícita
var p3 = {
    nombre : "Gael Rodríguez",
    edad : 4,
    sexo : "Hombre",
    peso : 19,
    altura : 1.05,
}
//mostrando en consola
console.log(p3.nombre);
console.log(p3.edad);
console.log(p3.sexo);
console.log(p3.peso);
console.log(p3.altura);