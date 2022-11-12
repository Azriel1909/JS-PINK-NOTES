// Lado del backend

// Variables -Espacio de memoria donde colocaos datos y pueden cambiar o no.

console.log("Hola mundo!")

// Definir variables

var nombre = 'Ximena'
console.log(nombre)

// Tipo de datos

let lugar = "Av. Izcali, calle 3"
var costo = 200
let tasa = 50.5

// Js es un lenguaje sensible a mayúsculas y minúsculas

/* Js es un lenguaje libre no tipado, js sabe exactamente de que dato trata*/

var costo = 'caro'

// Conversión de tipo de datos

// Primitivos

// Const no cambia en el tiempo
const nombrePasajero = 'Ximena Toledo' 
console.log(nombrePasajero)

// Let cambia
let nombrePasajero2 = 'Pink Hat' 
console.log(nombrePasajero)

// Numéricos
const pi = 3.141592
console.log(pi)

let pi2 = 3.141592
console.log(pi)

// Lógicos
let verdad = true
console.log(verdad)
verdad = false
console.log(verdad)

// Operaciones aritméticas
let total = 999 + 10 + 79
console.log(total)
console.log(total + pi)

// ? Orden de precedencia () 
// ? * y /
// ? + y -

// concatenación de textos

let nombreA = 'Ximena'
let apellidoP = 'Toledo'
let hobbies = 'Programar'

let nombreCompleto = nombre + ' ' + apellidoP
console.log(nombreCompleto)

let num1 = '9'
let num2 = '2'
let suma = num1 + num2
console.log(suma)

let cociente = parseInt('1000') / parseFloat('10')
console.log(cociente)

// Nan
let noNum = parseInt('AAAA');
console.log(noNum)

// CONVERSIÓN DE TIPO DE DATOS

// Tipo de datos primitivos
// Alfanumérico

const nameEmpleado1 = 'Max Weber' // Variable que no cambia en el tiempo 
console.log(nameEmpleado1)

let nameEmpleado2 =  'Conratt Bennett' // Sí cambia en el tiempo
console.log(nameEmpleado2)

// Dato numérico
const ticket1 = 1200; // No coloca el tipo de dato ya que la const está definida
console.log(ticket1)

let ticket2 = 1200; // Dato numérico
console.log(ticket2)

var ticket3 = 2000.50; // Dato que sí varia en el tiempo 
console.log(ticket3)

let ticket4 = '1200'; // Dato número alfanumérico - string
console.log(ticket4)

let ticketActive = true; // Dato lógicos (True or False)
console.log(ticketActive)

// OPERACIONES ARITMÉTICAS

// Suma 
let sumaTotal = ticket1 + ticket2 + ticket3 * 0.5;
console.log(sumaTotal)

// Niveles - Orden de precedencia 
let sumaTotal2 = 1200 + 500 + 60*3;
console.log(sumaTotal2)
// ? ()
// ? * y /
// ? + y -
// podemos definirme con los paréntesis 

sumaTotal2 = 1200 + ( 500 + 60 ) * 3;
console.log(sumaTotal2)

// Concatenación de texto

let devName = 'Ximena'
let lastDevName = 'Toledo'
let completeDevName = devName + ' ' + lastDevName
console.log(completeDevName)

// Funciones importantes 

let div = parseInt('1000') / parseFloat ('10')
// Funciones que convierten el tipo de dato
console.log(div)

// ASIGNANDO VALORES A LAS VARIABLES 
// Espacio en memoria que puede o no cambiar en el tiempo

const numA = 20.9678
let numB_1 = 17
var numC_1 = 50 // Var = El alcance de la variable es total en el punto principal

{ // Bloque 1
  console.log('Bloque 1: '+ numC_1)
}

{ // Bloque 2
  let numB_2 = 19
  var numC_2 = 50 
  console.log('Bloque 2: '+ numC_2)
}
// console.log('Bloque 2: '+ numB_2) // El ámbito de la variable let definida dentro del bloque 2 implica la función que tenga dentro del bloque y no fuera de él.

// Con var se tiene más alcance 
console.log('Fuera del Bloque 2: '+ numC_2)

// ASIGNACIÓN DE VALORES A LAS VARIABLES
// Plantilla de texto - TEMPLATES

// Lugar para interpolar / sustitución
let nameTemplate = `Mi nombre es ${devName} ${lastDevName}`
console.log(nameTemplate)

// Inmutabilidad y conversión de tipo de datos en variables, js tiende aq realizar conversión automática de tipos de datos, para lograr inmutabilidad debemos usar const 

// Error de lógica, no de sintaxis 
let devName2 = 'Pink Hat'
console.log(`Nombre del segundo desarrollador - ${devName2}`)
devName2 = 9999
console.log(`Nombre del segundo desarrollador - ${devName2}`)

// NUEVO TIPO DE DATOS: LISTAS 

// Definimos cantidad de platillos 

// Definición de lista con datos alfanumérico
const platillosDisponibles = new Array('Helados','Cupcakes','Donuts')
console.log(platillosDisponibles)

const bebidasDisponibles = ['Batido de fresa','Café Espresso', 'Café Latte'];
console.log(bebidasDisponibles)

// Agregar dato al final del código

{
  platillosDisponibles.push('Galletas de cajeta')
  bebidasDisponibles.push('Café de Olla')
  console.log(platillosDisponibles)
  console.log(bebidasDisponibles)
}

// Agregar dato al principio del código

{
  platillosDisponibles.unshift('Bombones de Chocolate')
  bebidasDisponibles.unshift('Frappé')
  console.log(platillosDisponibles)
  console.log(bebidasDisponibles)
}

// Mostrar el primer elemento

{
  console.log(platillosDisponibles[0])
  console.log(bebidasDisponibles[0])
// Se comienza a contar desde la posición 0
}

// Borrar y agregar elementos de la lista

{
  platillosDisponibles.splice(0,1,'Bombones de Vainilla')
  console.log(platillosDisponibles)
}

// Conociendo la cantidad de elementos de una lista

const cantidadPlatillos = platillosDisponibles.length
console.log(`Cantidad de platillos disponibles: ${cantidadPlatillos} platillos`)
console.log(`Cantidad de bebidas disponibles: ${bebidasDisponibles.length} bebidas`)

// Eliminar elementos al inicio de la lista

{
  // Primero
  platillosDisponibles.shift()
  // último
  platillosDisponibles.pop()
  console.log(platillosDisponibles)
}

// Filtrando elementos

let platillosFiltrados = platillosDisponibles.filter((e) =>  e == 'Helados')
console.log(platillosFiltrados)

platillosFiltrados = platillosDisponibles.filter((e) =>  e.length > 6)
console.log(platillosFiltrados)

// Separar los datos - Variable alfanumérica

console.log(platillosDisponibles.join('-'))

// Ordenar la lista
const platillosOrdenados = platillosDisponibles.sort()
console.log(platillosOrdenados)

// Reconociendo el arreglo después de ordenar 
console.log(`Helados está en la posición: ${platillosDisponibles.indexOf('Helados')}`)

// Unificar listas
const productos = platillosDisponibles.concat(bebidasDisponibles)
console.log(productos)
