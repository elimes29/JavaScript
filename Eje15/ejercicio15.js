/*Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/

//Con funcion constructora
function Circulo(radio) {
    this.radio = radio;
    this.areaCirculo = areaCirculo;
    this.perimertoCirculo = perimertoCirculo;
}

function areaCirculo() {
    alert(`El área de un circulo de radio ${this.radio}
    es:${(this.radio * this.radio * Math.PI).toFixed(2)} `)
}

function perimertoCirculo() {
    alert(`El perimetro de un circulo de radio ${this.radio}
    es: ${(2 * this.radio * Math.PI).toFixed(2)}`);
}

var circulo1 = new Circulo();
circulo1.radio = prompt("Ingresa el radio del círculo")

circulo1.areaCirculo();
circulo1.perimertoCirculo();