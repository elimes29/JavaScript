/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */

//Leyendo datos de pantalla
var cont;
do {
    var a = prompt("Ingrese un número");
    var b = prompt("Ingrese otro número");

    //Leyendo operacion a realizar
    var op = prompt("Indique la operación que desea realizar (Suma: 'S', Resta: 'R', Multiplicación: 'M' o División: 'D')");
    op = op.toLocaleUpperCase(); //colocando en mayuscula para que puedas inresar tanto mayusculas como minusculas

    var resultado;
    var operacion;
    switch (op) {
        case "S"://caso suma
            resultado = a + b;
            operacion = "+";
            alert(`El resultado de ${a} ${operacion} ${b} es: ${resultado.toFixed(2)}`);
            break;
        case "R"://caso resta
            resultado = a - b;
            operacion = "-";
            alert(`El resultado de ${a} ${operacion} ${b} es: ${resultado.toFixed(2)}`);
            break;
        case "M"://caso multiplicación
            resultado = a * b;
            operacion = "x";
            alert(`El resultado de ${a} ${operacion} ${b} es: ${resultado.toFixed(2)}`);
            break;
        case "D"://caso división
            resultado = a / b;
            operacion = "/";
            alert(`El resultado de ${a} ${operacion} ${b} es: ${resultado.toFixed(2)}`);
            break;
        default://caso operador erroneo
            alert("Ingresó un caracter erronero");
            break;
    }
    
    cont = ((prompt("Desea continuar realizando operaciones (S/N)").toLocaleUpperCase() == "S") ? true : false);
} while (cont)


