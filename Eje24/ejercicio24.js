/*Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
amarillo, por ejemplo)*/

//Funcion que captura datos de formulario
function captura(){
        //capturamos el dato
        var radio = document.getElementById("formGroupExampleInput").value;
        //alert(`El radio es de ${radio}`);
        
        //Validando si colocaron "," para convertirlo en "."
        if (typeof(radio) == "string"){
                radio = radio.replace(",",".");
                radio = Number(radio);
        };

        //Calculo área y perímetro
        var area = radio*radio*Math.PI;
        var perimetro = radio*2*Math.PI;

        //escribo el valor en el id perimetro
        document.getElementById("perimetro").innerHTML=perimetro.toFixed(2);

        //escribo el valor en el id area
        document.getElementById("area").innerHTML=area.toFixed(2);



}


