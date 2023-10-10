const correo = prompt("Introduzca un correo electronico: ");

let Nusuario 
Nusuario = correo.trim().replace('@gmail.com','').replace('@hotmail.com','').replace('@gmail.es','').replace('@hotmail.es','')
// Nusuario = correo.trim.includes('@')

console.log(`El nombre de usuario es ${Nusuario}`);