/*Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
amarillo, por ejemplo)*/

//parrafo a ingresar
let parrafo = "George Harrison contribuyó con dos canciones en el álbum, incluyendo el primer sencillo número uno de The Beatles que no era una composición de Lennon y McCartney. Se trataba de \"Something\", canción escrita originalmente durante las sesiones del álbum blanco, y cuya primera línea se basaba en una canción de James Taylor (\"Something in the Way She Moves\"). Originalmente George se la dio a Joe Cocker, pero luego la regrabó con los Beatles para el Abbey Road. \"Something\" era el tema favorito de Lennon de todos los del álbum, y Frank Sinatra comentó una vez erróneamente que \"Something\" era \"su canción favorita de Lennon y McCartney\" (aunque la canción no haya sido escrita por ninguno de los dos). Incluso aseguró que era la mejor canción de amor de los últimos 50 años. La canción se distribuyó en un sencillo de doble cara A junto al tema \"Come Together\".";
//console.log(parrafo);

//Convertimos el string en un vector
var vectorTexto = parrafo.split(" ");
//console.log(vectorTexto);

var longPalabras = new Array();//creamos un vector donde colocaremos la longitud de cada elemento
for (const palabra of vectorTexto) {//en este for recorremos el vector y guardamos la lonitud de cada palabra
    longPalabras.push(palabra.length);
}
//console.log(longPalabras);

var vectorPalabrasLargas = new Array();// vector donde colocaresmos el indice de las palbras de mas de 8 letras
for (let i = 0; i < longPalabras.length; i++) {
        if (longPalabras[i]>=8){
                vectorPalabrasLargas.push(i);
        }
}
//console.log(vectorPalabrasLargas);

//ahora recorremos con un for de vectorPalabrasLargas solo las palabras que hay que resaltar
//y agregamos la etiqueta que será usada en el css
for (let i = 0; i < vectorPalabrasLargas.length; i++) {
        vectorTexto[vectorPalabrasLargas[i]]="<span class='resaltado'>"+vectorTexto[vectorPalabrasLargas[i]]+"</span>";  
}
///console.log(vectorTexto);

//Convertimos el vector en string nuevamente
var textoSalida = vectorTexto.join(' ');
//console.log(textoSalida);

//publicamos en pagina
document.getElementsByClassName("parrafo")[0].innerHTML=textoSalida;