const nombre = prompt("Introduzca un Nombre: ");
const curso = prompt("Introduzca un Curso: ");
const localidad = prompt("Introduzca una Localidad: ");
const fechainicio = prompt("Introduzca la fecha de inicio: ");
const fechafinal = prompt("Introduzca la fecha de fin: ");

let carta = `Estimado ${nombre.trim()},

Bienvenido al curso de ${curso.trim()} que se celebrará en la localidad de ${localidad.trim()} entre las fechas ${fechainicio.trim()} y ${fechafinal.trim()}. Espero que el curso se desarrolle según sus expectativas. Estaremos encantados de atenderle

Atentamente, 
La dirección`;
console.log(carta);