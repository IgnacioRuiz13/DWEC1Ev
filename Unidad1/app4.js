//Cadenas de texto
//Concatenar
let nombre = "Pepe";
let apellido = "Mosca";
let nombre_completo = nombre + ' ' + apellido;
console.log(nombre_completo);
//Template literals
let curso = 'VS2DAW';
nombre_apellido = `Hola ${nombre} ${apellido}`;
console.log(nombre_apellido);
let saludo = `Hola ${nombre} ${apellido}, bienvenido a ${curso}`;
console.log(saludo);

//Length 
console.log(nombre.length);

//.includes(subcadena)
console.log(saludo.includes('bien551d'));

//.slice(start, end)
console.log(saludo.slice(12,17));

//.replace("este texto","Por este otro")
console.log(saludo.replace('Pepe','Fernando').replace('VS2DAW','VS2ASIR'));

//.trim
let cadena = '          Hola    asd     as      '
console.log(cadena.trim());



//