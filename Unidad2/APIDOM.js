//# para los id / . para las clases
//Devuelve los elemntos selecionados
let contenido = document.querySelector(".cabezera.titulo");
console.log(contenido);

//Elimina un elemento
document.querySelector(".contenido").remove();

//Busca todos los parrafos
let parrafos = document.querySelectorAll("p");
console.log(parrafos);

//Busca los parrafos que su padre sea ese
//let matches = document.querySelectorAll("div.highlighted>p");
//let matches = document.querySelectorAll("div.nota , div.alerta");

let localizacion = document.location;
console.log(localizacion);

let titulo = document.title;
console.log(titulo);

// innerText saca el contenido
let valor1 = document.querySelector("#pie").innerText;
console.log(valor1);

let valor = document.querySelector("#pie").innerHTML;
console.log(valor);

let valor3 = document.querySelector("#miboton").value;
console.log(valor3);

//---