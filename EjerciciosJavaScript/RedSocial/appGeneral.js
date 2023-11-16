const btnUsers = document.getElementById("usersAll");
const btnHome = document.getElementById("home");
const contenedor = document.getElementById("cont");
const url = 'https://jsonplaceholder.typicode.com/users';
let listausers = new Array();
let num = 0;

async function fetchUserJSON() {
    const response = await fetch(url);
    const user = await response.json();
    return user;
}

function accedeUsers() {
    fetchUserJSON().then(users => {
        users.forEach(user => {

            listausers.push(user);
            //console.log(listausers[num]);
            num = num + 1;
        });
        pintaUsuarios(listausers);
    });
};

function pintaUsuarios(listado) {
    const miTabla = document.createElement("table");
    const thead = document.createElement("thead");
    const trh = document.createElement("tr");
    const thh1 = document.createElement("th");
    const thh2 = document.createElement("th");
    const thh3 = document.createElement("th");
    const thh4 = document.createElement("th");
    const thh5 = document.createElement("th");

    miTabla.classList.add("table");
    miTabla.classList.add("table-striped");
    miTabla.setAttribute("border", "2");

    thh1.textContent = "Id";
    thh2.textContent = "Nombre";
    thh3.textContent = "Nombre Completo";
    thh4.textContent = "Email";
    thh5.textContent = "Posts";

    trh.appendChild(thh1);
    trh.appendChild(thh2);
    trh.appendChild(thh3);
    trh.appendChild(thh4);
    trh.appendChild(thh5);
    thead.appendChild(trh);
    miTabla.appendChild(thead);

    const tbody = document.createElement("tbody");
    listado.forEach(user => {
        const tr = document.createElement("tr");
        const thb1 = document.createElement("th");
        const thb2 = document.createElement("th");
        const thb3 = document.createElement("th");
        const thb4 = document.createElement("th");
        const thb5 = document.createElement("th");

        thb1.textContent = user.id;
        thb2.textContent = user.username;
        thb3.textContent = user.name;
        thb4.textContent = user.email;
        thb5.textContent = "Enlace";

        tr.appendChild(thb1);
        tr.appendChild(thb2);
        tr.appendChild(thb3);
        tr.appendChild(thb4);
        tr.appendChild(thb5);

        tbody.appendChild(tr);

    });

    miTabla.appendChild(tbody);
    contenedor.appendChild(miTabla);
    console.log("Terminado");
};

btnUsers.addEventListener("click", e => {
    accedeUsers();
});

btnHome.addEventListener("click", e => {
    contenedor.textContent = "";
});
