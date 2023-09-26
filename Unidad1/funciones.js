//Funciones anonimas
let funccion = function(parametros){
    return parametros + ":)";
}

console.log(funccion("Hola"));

//CALLBACK

function getIdentificacion (numero,letra,CALLBACK){
    let identificacion = CALLBACK(numero,letra);
    return identificacion;
}

let formatoNIF = function (numero,letra){
    return numero + " - " + letra;
}

let formatoNIE = function (numero,letra){
    return letra + " - " + numero;
}

console.log(getIdentificacion("343836","S",formatoNIE));

//Forma mas utilizada de callbacks

function getIdentificacion2 (numero,letra,CALLBACK){
    let identificacion = CALLBACK(numero,letra);
    return identificacion;
}

getIdentificacion2("131415","R",function(numero,letra){
    console.log(numero + " - " + letra);
    return numero + " - " + letra;
});

//Funciones autoinvocadas

!(function(numero,letra){
    console.log(numero + " - " + letra);
})("12345678","T")

