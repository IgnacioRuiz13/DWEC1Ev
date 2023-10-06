const contenedor = document.querySelector(".container");
let numT = prompt(`Mete un numero para sacar su tabla de multiplicar`)

let newDiv = document.createElement("h2");
let newContent = document.createTextNode(`Tabla de multiplicar del ${numT}`);
newDiv.appendChild(newContent);
contenedor.appendChild(newDiv);

for(let i=1;i<=10;i++){
    addElement(numT,i);
}

function addElement(numTabla , y){
    let newDiv = document.createElement("div");

    let boldElement = document.createElement("strong");
    boldElement.textContent = numTabla;

    let newContent = document.createTextNode(` * ${y} = ${(numTabla * y)} `);

    newDiv.appendChild(boldElement);
    newDiv.appendChild(newContent);

    contenedor.appendChild(newDiv);
};

/*
    let newDiv = document.createElement("div");
    let mult = numT * i;
    let newContent = document.createTextNode(`${numT} * ${i} = ${mult}`);
    newDiv.appendChild(newContent);
    
    contenedor.appendChild(newDiv);
    */
