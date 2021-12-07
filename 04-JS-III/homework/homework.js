// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}
//devolverPrimerElemento(array);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}
//devolverUltimoElemento(array);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
//obtenerLargoDelArray(array);


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayNum=[];
  for (var i=0; i < array.length; i++){
    arrayNum[i] = array[i] + 1;
  }
  return arrayNum;
}
//incrementarPorUno(arrayNumeros);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
//agregarItemAlFinalDelArray(saludos, "buenas noches");

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
//agregarItemAlComienzoDelArray(saludos, "Hi");

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // var concat=""; 
  // for (var i=0; i < palabras.length; i++){
  //   concat = concat + palabras[i] + " ";
  // }
  var concat=palabras[0]; 
  for (var i=1; i < palabras.length; i++){
    concat = concat + " " + palabras[i];
  }
  return concat;
}
//dePalabrasAFrase(saludos);


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i++){
     if (array[i] === elemento) {
      return true;
    }
  }
      return false;
}
//arrayContiene(saludos, "Hola");


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var i = 0; i < numeros.length; i++){
     suma = suma + numeros[i];
  }
  return suma;
}
//agregarNumeros(arrayNumeros);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var totalNotas = 0;
  for (var i = 0; i < resultadosTest.length; i++){
    totalNotas = totalNotas + resultadosTest[i];
  }
  return totalNotas / resultadosTest.length;
}
//promedioResultadosTest(arrayNumeros);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = numeros[0];
  for (var i = 0; i < numeros.length; i++) 
  if (numeros[i] > max) {
    max = numeros[i]
  }
  return max;
}
//numeroMasGrande(arrayNumeros);



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
  total = total * arguments[i];
  }
  return total;
}
//multiplicarArgumentos(2,3);

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad = 0;
  for(let i=0; i<arreglo.length; i++) {
   if(arreglo[i]>18) cantidad++
}
  return cantidad;
}
//cuentoElementos(2,4,20,50);

// function cuentoElementos(arreglo){
//    var aux = 0;

//   for (i = 0; i < arreglo.length; i++)
//   {
//      if(arreglo[i] > 18)
//      {
//        aux = aux + 1;
//      }
//   }

//   return aux;

// }
//arreglo = [1, 2, 3, 4, 80, 5, 90, 6, 388];
//cuentoElementos(arreglo);

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else   { 
    return "Es dia Laboral";
  }
}
//diaDeLaSemana(7);
//diaDeLaSemana(5);

// function empiezaConNueve(n) {
//   //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
//   //inicia con 9 y false en otro caso.
//   //Escribe tu código aquí
//   var str=n.toString()
//   if(str[0] == "9") return true;
//   return false;
// }

function empiezaConNueve(n) {
  var strNum = n.toString();
  if(strNum[0] == 9)
  {
    return true;
  }
  else
  {
  return false;
  }

}
//empiezaConNueve(234);
//empiezaConNueve(943);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(let i = 0; i < arreglo.length -1; i++) {
    if(arreglo[i] !== arreglo[i + 1]) return false;
    }
      return true;
} 
//todosIguales(5,5,5);
//todosIguales(1,2,3);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var aux=[]
  for(let i = 0; i < array.length; i++) {
    if(array[i] === "Enero" ||
       array[i] === "Marzo" ||
       array[i] === "Noviembre") aux.push(array[i])
  }
  if(aux.length !==3) return "No se encontraron los meses pedidos"
  return aux;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayoresCien=[]
  for(let i = 0; i < array.length; i++) {
    if(array[i] > 100) mayoresCien.push(array[i])
  }
  return mayoresCien
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
//   var arr=[]
//   for(let i = 0; i < 10; i++) {
//     if(i === numero) break
//     numero = numero + 2
//     arr.push(numero)
  
//     if(i === numero) return "Se interrumpió la ejecución";
//      return arr
//   }   
// }
   var unArray = [];
   var auxI;

for(let i=0; i<10; i++){
  numero = numero + 2;
  auxI = i;
    if (i === numero)
    {
      //return "Se interrumpió la ejecución";
      break;
    }
  unArray.push(numero);
}
if(auxI === numero)
{
  return "Se interrumpió la ejecución";
}
return unArray;
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arr=[]
  for(var i = 1; i <= 10; i++){
    if(i === 5) continue
    numero += 2
    arr.push(numero)
  }
  return arr
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
}
