//typeof
const num = 20;
console.log("Tipo es: " + typeof num);
//NaN
const variable = 4 * "hola";
console.log(variable);
console.log("Tipo es: " + variable);
//Infinity
const division = 4/0;
console.log(division);
console.log("Tipo es: " + typeof division);
//isNaN
const numberString = "30";
const String = "20 años";
console.log(isNaN(variable));
console.log(isNaN(division));//Infinity es un numero
console.log(isNaN("13")); // Puede interpretar esta var como un numero
console.log(isNaN(13));// Es solo un numero
console.log(isNaN(numberString));
console.log(isNaN(String));
console.log(isNaN(NaN));
//toString
const number = 100;
console.log(number);
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString());
//toFixed
console.log(number.toFixed(4));

/*
Ejercicio 1
Cuanto toca pagar a cada persona de una cena que cuesta 102 € y asistieron 6 personas
*/
console.log((102/6).toFixed(2) + " €");

//Boolean true
console.log(Boolean(1));//Devuelve verdader si es mayor de 1
console.log(Boolean("C")); //DEvuelve verdader si tiene texto
console.log(Boolean(3.14));
console.log(Boolean(100>5));
console.log(Boolean('1'==1));
console.log(Boolean(Infinity));
//Boolean false
console.log(Boolean(0));//Devuelve verdader si es mayor de 1
console.log(Boolean("")); //DEvuelve verdader si tiene texto
console.log(Boolean(NaN));
console.log(100>500);
console.log(Boolean('1'===1));
console.log(Boolean(undefined));



//---