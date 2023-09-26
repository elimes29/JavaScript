/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/

var frase = prompt("Ingrese una frase");
var fraseEspacio="";
var fraseEspacio1="";

//forma 1 for of
for (let letra of frase) {
    fraseEspacio = fraseEspacio + letra+ " ";
}
//Forma 2 substring
for (let i = 0; i < frase.length; i++) {
    console.log( frase.substring(i, (i+1)) );
    fraseEspacio1 = fraseEspacio1 + frase.substring(i, (i+1)) + " ";
    
}


alert(`${fraseEspacio} / ${fraseEspacio1}`);
console.log(fraseEspacio === fraseEspacio1)

