const btnUsers = document.getElementById("usersAll");
const btnHome = document.getElementById("home");
const btnPosts = document.getElementById("postsAll");
const contenedor = document.getElementById("cont");
const url = 'https://jsonplaceholder.typicode.com/users';
let listausers = new Array();
let listapostsUsers = new Array();
let listapostsAll = new Array();
let TablaUserOnOff = true;

async function fetchUserJSON(pagWeb) {
    const response = await fetch(pagWeb);
    const user = await response.json();
    return user;
}

btnUsers.addEventListener("click", e => {
    contenedor.textContent = "";
    if (TablaUserOnOff) {
        accedeUsers();
    }
});

btnHome.addEventListener("click", e => {
    contenedor.textContent = " ";
    TablaUserOnOff = true;
});

btnPosts.addEventListener("click", e => {
    contenedor.textContent = " ";
    let urlPosts = `https://jsonplaceholder.typicode.com/posts`;
    
    fetchUserJSON(urlPosts).then(AllPosts => {
        AllPosts.forEach(posts => {
            listapostsAll.push(posts);
        });
        pintaPosts(listapostsAll);
        listapostsAll.length = 0;
    });
});



function accedeUsers() {
    fetchUserJSON(url).then(users => {
        users.forEach(user => {
            listausers.push(user);
        });
        pintaUsuarios(listausers);
        listausers.length = 0;
    });
};

function obtenerPosts(id) {
    let urlPostsUser = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

    fetchUserJSON(urlPostsUser).then(usersPosts => {
        usersPosts.forEach(posts => {
            listapostsUsers.push(posts);
        });
        pintaPosts(listapostsUsers);
        listapostsUsers.length = 0;
    });

}

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
        thb2.innerHTML = `<a href="#" class="informacionUsuario" data-id="${user.id}" >${user.username}</a>`;
        thb3.textContent = user.name;
        thb4.textContent = user.email;
        thb5.innerHTML = `<a href="#" class="postUsuario" data-id="${user.id}" >Mostrar Posts</a>`;

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

    const infoUser = document.querySelectorAll(".informacionUsuario");
    infoUser.forEach(userEnlace => {
        userEnlace.addEventListener("click", e => {
            contenedor.textContent = "";
            const idUser = userEnlace.dataset.id;
            pintaUsuario(idUser);
        });
    })

    const postUser = document.querySelectorAll(".postUsuario");
    postUser.forEach(userEnlace => {
        userEnlace.addEventListener("click", e => {
            contenedor.textContent = "";
            const idUser = userEnlace.dataset.id;
            obtenerPosts(idUser);
        });
    })

};

function pintaUsuario(id) {
    let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetchUserJSON(urlUser).then(usuario => {

        const miLista = document.createElement("ul");

        const li1 = document.createElement("li");
        li1.textContent = 'ID: ' + usuario.id;
        miLista.appendChild(li1);

        const li2 = document.createElement("li");
        li2.textContent = 'Name: ' + usuario.name;
        miLista.appendChild(li2);

        const li3 = document.createElement("li");
        li3.textContent = 'Username: ' + usuario.username;
        miLista.appendChild(li3);

        const li4 = document.createElement("li");
        li4.textContent = 'Correo: ' + usuario.email;
        miLista.appendChild(li4);

        const li5 = document.createElement("li");
        li5.textContent = 'Calle: ' + usuario.address.street;
        miLista.appendChild(li5);

        const li6 = document.createElement("li");
        li6.textContent = 'Suite: ' + usuario.address.suite;
        miLista.appendChild(li6);

        const li7 = document.createElement("li");
        li7.textContent = 'Ciudad: ' + usuario.address.city;
        miLista.appendChild(li7);

        const li8 = document.createElement("li");
        li8.textContent = 'Latitud: ' + usuario.address.geo.lat + " Longitud: " + usuario.address.geo.lng;
        miLista.appendChild(li8);

        const li9 = document.createElement("li");
        li9.textContent = 'Telefono: ' + usuario.phone;
        miLista.appendChild(li9);

        const li10 = document.createElement("li");
        li10.textContent = 'Website: ' + usuario.website;
        miLista.appendChild(li10);

        const li11 = document.createElement("li");
        li11.textContent = 'Nombre de la Companhia: ' + usuario.company.name;
        miLista.appendChild(li11);

        const li12 = document.createElement("li");
        li12.textContent = 'Tipo de Companhia: ' + usuario.company.catchPhrase;
        miLista.appendChild(li12);

        contenedor.appendChild(miLista);
    });

}

function pintaPosts(posts) {
    let gestionPostsTotales = new Array();
    let gestionPosts5 = new Array();
    let num = 0;
    let numCont = 5;

    posts.forEach(post => {
        
        const content = document.createElement("div");
        content.classList.add("divpost");

        const titulo = document.createElement("h3");
        const texto = document.createElement("p");
        const autor = document.createElement("a");

        titulo.textContent = `${post.title}`;
        texto.textContent = `${post.body}`;
        autor.innerHTML = `<a href="#" class="informacionAutor" data-id="${post.userId}" >Autor: ${post.userId}</a>`;

        content.appendChild(titulo);
        content.appendChild(texto);
        content.appendChild(autor);

        gestionPostsTotales.push(content);
    });

    const pasar5 = document.createElement("button");
    pasar5.classList.add("btn");
    pasar5.classList.add("nav-link");
    pasar5.classList.add("px-2");
    pasar5.textContent = "Leer 5 mas"

    const retrasar5 = document.createElement("button");
    retrasar5.classList.add("btn");
    retrasar5.classList.add("nav-link");
    retrasar5.classList.add("px-2");
    retrasar5.textContent = "Leer 5 menos"
    retrasar5.disabled = true;

    while(num<numCont) {
        gestionPosts5.push(gestionPostsTotales[num]);
        num++
    }

    pasar5.addEventListener("click", e => {
        gestionPosts5.length = 0;
        numCont = numCont + 5;

        //retrasar5.disabled = false;

        if (numCont>=gestionPostsTotales.length) {
            numCont-5;
            pasar5.disabled = true;
            pasar5.textContent = "No hay mas posts";
        }

        const divposts = document.querySelectorAll(".divpost");
        divposts.forEach(divpost => {
            contenedor.removeChild(divpost);
        });

        while(num<numCont) {
            gestionPosts5.push(gestionPostsTotales[num]);
            num++
        }

        pinta5(gestionPosts5,pasar5,retrasar5);
    });

    /*
    retrasar5.addEventListener("click", e => {
        gestionPosts5.length = 0;
        if (numCont>5) {
            numCont = numCont - 5;
            if(numCont == 5) {
                retrasar5.disabled = true;
            }
        }

        const divposts = document.querySelectorAll(".divpost");
        divposts.forEach(divpost => {
            contenedor.removeChild(divpost);
        });

        console.log("Antes bucle " + numCont)
        console.log("Antes bucle " + num)
        while(num>numCont) {
            gestionPosts5.push(gestionPostsTotales[num-1]);
            console.log(gestionPostsTotales[num-1]);
            num--;
        }
        console.log("DEpues bucle " + numCont)
        console.log("DEpues bucle " + num)

        pinta5(gestionPosts5,pasar5,retrasar5);
    });
    */

    gestionPostsTotales.forEach(post => {
        const infoUser = post.querySelector(".informacionAutor");
        infoUser.addEventListener("click", e => {
            contenedor.textContent = "";
            const idUser = infoUser.dataset.id;
            pintaUsuario(idUser);
        });
    });

    pinta5(gestionPosts5,pasar5,retrasar5);

};

function pinta5(cincoPosts, butn5mas, butn5menos) {
    cincoPosts.forEach(post => {
        contenedor.appendChild(post);
    });
    const consola = document.createElement("div");
    consola.classList.add("console");

    consola.appendChild(butn5menos);
    consola.appendChild(butn5mas);

    contenedor.appendChild(consola);
}
