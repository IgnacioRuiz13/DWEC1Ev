let num = prompt("Introduzca un número: ");
let ent = 0;

if (num<18){
    console.log("Es menor de edad");
    while(num<18){
        num = prompt("Introduzca un número: ");
        if (num<18){
            console.log("Es menor de edad");
        }
    }
    console.log("Es mayor de edad");
} else {
    console.log("Es mayor de edad");
    ent = 2
}