window.addEventListener("load", function () {
    const formulario = document.querySelector("#formulario");
    const usuario = document.querySelector("#user");
    const passwd = document.querySelector("#passwd");
    const newpasswd = document.querySelector("#newpasswd");
    const fechaNac = document.querySelector("#fechaNac");
    const condiciones = document.querySelector("#condiciones");
    let valido = true;

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        evento.stopPropagation();
        valido = true;

        if (!validaUser(usuario)) {
            valido = false;
        };

        if (!validaPasswd(passwd)) {
            valido = false;
        }

        if (!validaPasswd2(newpasswd, passwd)) {
            valido = false;
        };

        if (!validaFecha(fechaNac)) {
            valido = false;
        };

        if (!validaCheck(condiciones)) {
            valido = false;
        };

        if (valido) {
            formulario.submit();
        }
    });

    function validaUser(e1) {
        if (!e1.value) {
            marcarError(e1, "No has introducido usuario");
            return false;
        } else {
            marcarValido(e1);
            return true;
        };
    };

    function validaPasswd(e2) {
        if (e2.value.length < 7) {
            marcarError(e2, "El password debe tener 7 caracteres");
            return false;
        } else {
            marcarValido(e2);
            return true;
        };
    };

    function validaPasswd2(newPasswd, oldPass) {
        if (newPasswd.value === oldPass.value) {
            marcarValido(newPasswd);
            return true;
        } else {
            marcarError(newPasswd, "Las contraseñas no coinciden");
            return false;
        };
    };

    function validaCheck(el) {
        if (!el.checked) {
            marcarError(el, "Tienes que aceptar las condiciones");
            return false;
        } else {
            marcarValido(el);
            return true;
        };
    };

    function validaFecha(el) {
        if (!el.value) {
            marcarError(el, "No has introducido fecha");
            return false;
        } else {
            marcarValido(el);
            return true;
        };
    };

    function marcarError(el, mensaje) {
        el.parentNode.querySelector(".error-feedback").textContent = mensaje;
        el.parentNode.classList.add("error");
    };

    function marcarValido(el) {
        el.parentNode.querySelector(".error-feedback").textContent = "";
        el.parentNode.classList.remove("error");
    };
});