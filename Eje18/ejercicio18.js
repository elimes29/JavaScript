/*A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/


var valores = [true, 5, false, "hola", "adios", 2];

alert(`a) Determinar cual de los dos elementos de texto es mayor:
"${valores[3]}" es mayor que "${valores[4]}" = ${valores[3]>valores[4]}

b) Utilizando exclusivamente los dos valores booleanos del array,
determinar los operadores necesarios para obtener un resultado 
true y otro resultado false:
con OR ${(valores[0] || valores[2])} y con AND ${((valores[0] && valores[2]))}

c) Determinar el resultado de las cinco operaciones matemáticas 
realizadas con los dos elementos numéricos:
suma: ${valores[1]+valores[5]}, resta: ${valores[1]-valores[5]}, multiplicación: ${valores[1]*valores[5]}, división: ${valores[1]/valores[5]}`)