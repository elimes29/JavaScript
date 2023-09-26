/*Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/

function Persona(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;

}

var p1 = new Persona("Elimes",39,"H",80,1.67);

//propiedades
console.log(Object.keys(p1));
//valores
console.log(Object.values(p1));