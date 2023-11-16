const deuda=0;
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("El servidor ha enviado los datos")
        console.log("asd")
    },2000)

    setTimeout(() => {
        reject("El servidor ha fallado")
    },6000)
})

promesa.then((response) => {
    console.log(response);
    console.log("Ultimo");
}).catch((error) => {
    console.log(error);
    console.log("Ultimo");
})

console.log("No espera resolver la promesa");
