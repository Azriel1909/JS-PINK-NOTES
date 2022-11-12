// LOOP
// BUCLES
// OPTIMIZACIÓN DE CÓDIGO DE LAS CONDICIONES
const platillosDisponibles = new Array('Helados','Cupcakes','Donuts','Galletas de Cajeta', 'Bombones de Chocolate')
console.log(platillosDisponibles)
const platillosPrecios = new Array(30, 50, 60, 55, 40)
console.log(platillosPrecios)
const precioDisponible = 39
let platilloSeleccionado = ''

// WHILE
let i = 0
while (platillosPrecios[i] > precioDisponible && i < platillosDisponibles.length) {
  i++
}
if (i == platillosDisponibles.length) {
  console.log('No disponible')
} else {
  console.log(`Productos disponibles con un precio disponible de ${precioDisponible} MNX: ` + platillosDisponibles[i])
}

// ORDEN
console.log('ORDEN EN BLOQUE')

const datos = [
  {
    'platillo': 'Helados',
    'precio': 30
  },
  {
    'platillo': 'Cupcakes',
    'precio': 50
  },
  {
    'platillo': 'Donuts',
    'precio': 60
  },
  {
    'platillo': 'Galletas de Chocolate',
    'precio': 70
  },
];

// DEPURACIÓN DE CÓDIGO
// verificar valores paso a paso, bloque a bloque, función a función.

// FOR
for (let index = 0; index < platillosDisponibles.length && platilloSeleccionado == '' ; index++) {
  if (datos[i].precio <= precioDisponible) {
    platilloSeleccionado = datos[i].platillo
    break;
  }
}

if (platilloSeleccionado == '' ) {
  console.log('No disponible')
} else {
  console.log('Disponible: ' + platilloSeleccionado)
}