const formulario = document.querySelector("#formulario");
const btn = document.getElementById("btn");
const formgmail = document.getElementById("user");
const formpasswd = document.getElementById("passwd");
const url = 'https://jsonplaceholder.typicode.com/users';
let gmailcoincide = false;
let passcoincide = false;

async function fetchUserJSON() {
    const response = await fetch(url);
    const user = await response.json();
    return user;
}

formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    evento.stopPropagation();
    let valido = true;

    if (!validaVacio(formgmail)) {
        valido = false;
    }

    if (!validaVacio(formpasswd)) {
        valido = false;
    }

    if (valido) {
        fetchUserJSON().then(users => {
            users.forEach(user => {
                if (user.email == formgmail.value.trim()) {
                    console.log("Mismo usuario");
                    gmailcoincide = true;
                }

                if (user.address.zipcode == formpasswd.value.trim()) {
                    console.log("Misma contraseña");
                    passcoincide = true;
                }
            });

            if(gmailcoincide && passcoincide) {
                alert("Inicio de sesion exitoso")
                window.open("./blog.html");
            } else {
                marcarError(btn,"Error en el correo o contrasenhea")
            }
        });
    }

    /*
    Sincere@april.biz
    92998-3874
    */

    function validaVacio(e1) {
        if (!e1.value) {
            marcarError(e1, "No has introduccido ningun dato");
            return false;
        } else {
            marcarValido(e1);
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

