document.addEventListener("DOMContentLoaded", function (evento) {

    const usuario = document.getElementById('uname');
    const clave = document.getElementById('pwd');
    const form = document.querySelector('from');

    form.addEventListener('submit',validarFormulario);

    usuario.addEventListener("keyup",function(e){
        console.log("ha cambiado");
        if (this.value){
            this.setCustomValidity("");
        }else {
            this.setCustomValidity("campo vacio");
        }
    });

    clave.addEventListener("keyup",function(e){
        console.log("ha cambiado");
        if (this.value.lenght >= 6) {
            this.setCustomValidity("");
        }else {
            this.setCustomValidity("Menor de 6 caracteres");
        }
    });

    function validarFormulario(evento){
        evento.preventDefault();
        evento.stopPropagation();

        let valido = true;
        if (!usuario.value) {
            usuario.setCustomValidity("Campo vacio");
            valido = false;
        } else {
            usuario.setCustomValidity("");
        }

        if (clave.lenght < 6) {
            clave.setCustomValidity("Menor de 6 caracteres");
            valido= false;
        } else {
            clave.setCustomValidity("");
        }

        this.classList.add('was-validated');

        if (valido) {
            this.submit();
        } else {
            usuario.setCustomValidity("");
        }
    }
});