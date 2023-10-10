const num = prompt("Introduzca un número: ");

22
if(!isNaN(num)){
    if(num%2 == 0) {
        console.log("El numero es par")
    } else {
        console.log("El numero es impar")
    }
} else {
    console.log("No es un numero")
}