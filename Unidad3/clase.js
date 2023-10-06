class Persona{
    constructor(nombre,apellido,anno,estudios,poblacion){
        this._nombre = nombre;
        this._apellido = apellido;
        this._anno = anno;
        this._estudios = estudios;
        this._poblacion = poblacion;
    }

    get annoNacimiento(){
        return this._anno;
    }

    get poblacion(){
       return this._poblacion;
    }

    get estudios(){
        return this._estudios;
     }


}


const p1 = new Persona("Jose","Garcia","1999","ESO","Toledo");
const p2 = new Persona("Ana","Garcia","1992","Bachillerato","Madird");

const Personas = (lista) => {
    let contador=0
    lista.forEach(elemento => {
       elemento.estudios();
       elemento.poblacion();
   })
   return contador;
};
document.write(p1);

//Estudios y poblacion

//Y los metodos para obtener cada uno de los atributos