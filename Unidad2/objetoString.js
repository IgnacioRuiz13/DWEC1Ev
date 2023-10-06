const cadena = 'Esto es una cadena';
const objetocadena =new String( 'Esto es una cadena');

console.log(typeof cadena);
console.log(typeof objetocadena);

console.log(cadena == objetocadena);  //Verdadero
console.log(cadena === objetocadena); //Falso

console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

//---