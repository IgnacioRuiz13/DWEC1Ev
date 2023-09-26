//Estructura condicionales
const flight = 100;
const hotel = 50;
const tour = 30;
const total = flight + hotel + tour;
const budget = '300';

if (budget>total){
    console.log(`Si me voy de viaje`);
} else if(budget===total){
    console.log(`Si me puedo ir, pero un presupuesto ajustado`);
} else {
    console.log(`No puedo ir`);
}

//Operadores ternarios
const result = budget > total ? console.log('Si me voy'):console.log('No me voy');
const newresult = budget > total ? 50 : 20;
/*
Ejercicio 2
Haz todas las comprobaciones para saber si es par o impar
*/
const NUM = "30" + 3;
if (isNaN(NUM)){
    console.log('No es un numero');
} else {
    const info = NUM % 2 == 0 ? 'par' : 'impar' ;
    console.log(info);
}

/*
Ejercico 3
Cadena mas larga de 27 caracteres, cortarla
En caso de que sea menor, añadir caracteres
*/
//const code = "En un lugar de la Mancha, de cuyo nombre";
const code = "Nacho"
if (code.length>=27){
    console.log(code.slice(0,27));
} else {
    console.log(27 - code.length);
}



//---