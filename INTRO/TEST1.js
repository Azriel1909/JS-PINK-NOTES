var exibeMensaje = function() { 
  var mensajeFueraDelIf = 'Ximena'; 
  if(true) { 
      var mensajeDentroDelIf = 'Pinkhat'; 
      console.log(mensajeDentroDelIf); // Pinkhat
  } 
  console.log(mensajeFueraDelIf); // Ximena
  console.log(mensajeDentroDelIf);  // Pinkhat
}

exibeMensaje();

// ? ¿Cómo es posible usar la variable mensaje incluso antes de declararla?
var exibeMensaje = function () {
  mensaje = 'Ximena';
  console.log (mensaje);
  var mensaje;
}

exibeMensaje();

// ! HOISTING
// cada variable es "elevada" (hoisting) a la parte superior de su contexto de ejecución.

// ! var (alcance integral) 

void function() {
  console.log(mensaje);
} ();
var mensaje; // Undefined

// * let
// Podemos declarar variables con alcance de bloque
// console.log("-----------------")
// var exibeMensaje = function () {
//   if(true) {
//       var scopeFunction = 'Ximena';
//       let scopeBlock = 'Pinkhat';
//       console.log (scopeBlock); 
//   }
//   console.log (scopeFunction); 
//   console.log (scopeBlock); 
//   // ! Uncaught ReferenceError: scopeBlock no está definido, alcance del bloque garantizado.
// }

exibeMensaje();

// * const

void function () {
  let mensaje;
    console.log (mensaje); // Imprime undefined
} ();

void function () {
  const mensaje = 'Ximena'; // ! Uncaught TypeError : Assignment to constant variable
  console.log (mensaje); // Ximena
  mensaje = 'Pinkhat';
} ();

// constante válida
const edad = 18;

// constante inválida: ¿dónde está la inicialización?
const pi; // ! Uncaught SyntaxError: Missing initializer in const declaration.