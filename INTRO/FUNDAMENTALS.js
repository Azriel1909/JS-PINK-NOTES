// OPERADORES LÓGICOS - VARIABLES BOOLEANAS
const platillosDisponibles = new Array('Helados','Cupcakes','Donuts')
console.log(platillosDisponibles)

const bebidasDisponibles = ['Batido de fresa','Café Espresso', 'Café Latte'];
console.log(bebidasDisponibles)

const obsequiosDisponibles = ['Taza decorada','Pulsera', 'Llavero'];
console.log(obsequiosDisponibles)

let platilloDestino = 'Cupcakes'
let bebidaDestino = 'Batido de fresa'
let obsequioDestino = 'Taza decorada'

// Evaluar condición
console.log('Verificando menú...')
if (platillosDisponibles.indexOf(platilloDestino) >= 0) {
  console.log(`Orden de ${platilloDestino}: 50 MXN`)
} else {
  console.log('Platillo no disponible')
}

const valor1 = '1000'

if(valor1 == 1000) {
  console.log(`El pasaje vale ${valor1}`)
}


// Evaluando incluso el tipo de dato con estricta igualdad
const valor2 = '1000'

if(valor2 === 1000) {
  console.log(`El pasaje vale ${valor2}`)
}

// OPERADORES LÓGICOS 
// ? AND && - se cumplen ambas condiciones
// ? OR || - se cumple al menos una condición
// ? NOT ! - no se cumple la condición

console.log('Verificando paquete...')
if (platillosDisponibles.indexOf(platilloDestino) >= 0 && bebidasDisponibles.indexOf(bebidaDestino) >= 0) {
  console.log(`Orden de ${platilloDestino}: 50 MXN`)
  console.log(`Un ${bebidaDestino}: 30 MXN`)
  console.log(`Total a pagar: 80 MXN`)
} else {
  console.log('Platillo no disponible')
}

// Se cumple al menos una
console.log('Verificando disponibles...')
if (platillosDisponibles.indexOf(platilloDestino) >= 0 || bebidasDisponibles[5]) {
  console.log(`Orden de ${platilloDestino}: 50 MXN`)
} else {
  console.log('Platillo no disponible')
}

// No se cumple al menos una
console.log('Verificando disponibles...')
if (platillosDisponibles.indexOf(platilloDestino) >= 0 && bebidasDisponibles[5]) {
  console.log(`Orden de ${platilloDestino}: 50 MXN`)
} else {
  console.log('Platillo no disponible')
}

// Lógica negativa
console.log('Verificando disponibles...')
if (!(platillosDisponibles.indexOf(platilloDestino) >= 0)) {
  console.log(`Orden de ${platilloDestino}: 50 MXN`)
} else {
  console.log('Platillo no disponible')
}

// IFS ENCADENADOS - ANIDADOS
if (platillosDisponibles.indexOf(platilloDestino) >= 0) {
  if (bebidasDisponibles.indexOf(bebidaDestino) >= 0) {
    if (obsequioDestino.indexOf(obsequioDestino) >= 0) {
      console.log(`Orden de ${platilloDestino}: 50 MXN`)
      console.log(`Un ${bebidaDestino}: 30 MXN`)
      console.log(`Obsequio: ${obsequioDestino}`)
      console.log(`Total a pagar: 80 MXN`)
    }
  }
} else {
  console.log('Platillo no disponible')
}

// AND

let pagoRecibido = false;
let ticketDevuelto = true;

if (platillosDisponibles.indexOf(platilloDestino) >= 0) {
  if (bebidasDisponibles.indexOf(bebidaDestino) >= 0) {
    if (obsequioDestino.indexOf(obsequioDestino) >= 0) {
      if(pagoRecibido || ticketDevuelto) {
        console.log(`Orden de ${platilloDestino}: 50 MXN`)
        console.log(`Un ${bebidaDestino}: 30 MXN`)
        console.log(`Obsequio: ${obsequioDestino}`)
        console.log(`Total a pagar: 80 MXN`)
      } else {
        console.log(`Pedido cancelado`)
      }
    }
  }
} else {
  console.log('Platillo no disponible')
}

// SWITCH
platilloDestino = 'Cupcakes'
switch (platilloDestino) {
  case 'Helados':
    console.log(`${platilloDestino}`)
    console.log('Precio de orden: 30 MXN')
    break;
  case 'Cupcakes':
    console.log(`${platilloDestino}`)
    console.log('Precio de orden: 50 MXN')
    break;
  case 'Donuts':
    console.log(`${platilloDestino}`)
    console.log('Precio de orden: 60 MXN')
    break;
  default:
    console.log('Producto no disponible')
    console.log('Platillos disponibles: ' + platillosDisponibles)
    break;
}