

document.getElementById("parrafo2").innerHTML = "Esto es inserción de <code>html";

var textoOriinal = console.log(document.getElementById("parrafo1").innerHTML);
console.log(textoOriinal);
var textoFinal = `${textoOriinal} mas lo otro`;
console.log(textoFinal);

//document.getElementById("parrafo1").innerHTML = textoOriinal+" Llevatelo";