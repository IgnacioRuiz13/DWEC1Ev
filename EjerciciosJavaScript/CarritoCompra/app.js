window.addEventListener("load" , e =>  {
    const cards = document.getElementById("cards");

    const templateCard = document.getElementById("template-card").content;

    const templateCarrito = document.getElementById("template-carrito").content;
    const templateFooter = document.getElementById("template-footer").content;

    const fragment = document.createDocumentFragment();
    const itemCarrito = document.querySelector("#items");

    let carrito = {};

    cards.addEventListener("click", e => {
        e.stopPropagation();
        addCarrito(e);
    });

    items.addEventListener("click", e => {
        btnAccion(e);
    });

    const fetchData = async () => {
        try {
            const res = await fetch("./productos.json");
            console.log(res);
            const data = await res.json();
            console.log(data);
            pintarCards(data);
        } catch (error) {
            console.log("Error de lectura del json");
        }
    }

    const pintarCards = data => {
        data.forEach(producto => {
            templateCard.querySelector("h5").textContent = producto.title;
            templateCard.querySelector("p").textContent = producto.precio;
            templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector("img").setAttribute("alt", producto.title);

            templateCard.querySelector(".btn").dataset.idProducto = producto.id;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        });

        cards.appendChild(fragment);
    }

    const addCarrito = e => {
        if (e.target.classList.contains("btn-dark")) {
            setCarrito(e);
        }
    }

    const setCarrito = e => {
        const idProducto = e.target.dataset.idProducto;
        console.log(idProducto);

        if(carrito.hasOwnProperty(idProducto)) {
            carrito[idProducto].cantidad++;
        } else {
            const producto = {
                id: idProducto,
                nombre: e.target.parentNode.querySelector("h5").textContent,
                precio: e.target.parentNode.querySelector(".precio").textContent,
                cantidad: 1
            }

            carrito[idProducto] = producto;
        }

        pintarCarrito();
        console.log(carrito);
    }

    const pintarFooter = () => {
        footer.innerHTML = "";
        if(Object.keys(carrito).length === 0) {
            footer.innerHTML = '<th scope="row" colspan="5">Carrito vacio, comience a comprar</th> ' 
        } else {
            const nCantidad = Object.values(carrito).reduce((acc, {
                cantidad
            }) => acc + cantidad, 0);

            const nTotal = Object.values(carrito).reduce((acc, {
                cantidad, precio
            }) => acc + cantidad * precio, 0);

            templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
            templateFooter.querySelector("span").textContent = nTotal;

            const clone = templateFooter.cloneNode(true);
            fragment.appendChild(clone);
            footer.appendChild(fragment);

            document.getElementById("vaciar-carrito").addEventListener("click", () => {
                console.log("Carrito Vacio");
                carrito = {};
                pintarCarrito();
            });
        }

    }

    const pintarCarrito = () => {
        itemCarrito.innerHTML = "";

        items.innerHTML = "";
        Object.values(carrito).forEach(producto => {
            templateCarrito.querySelector("th").textContent = producto.id;
            templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre;
            templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
            templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
            templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
            templateCarrito.querySelector("span").textContent = producto.precio * producto.cantidad;

            const clone = templateCarrito.cloneNode(true);
            fragment.appendChild(clone);
        });
        items.appendChild(fragment);
        pintarFooter();
    }

    const btnAccion = (e => {
        e.stopPropagation();
        if(e.target.classList.contains("btn-info")) {
            carrito[e.target.dataset.id].cantidad++;
            pintarCarrito();
        } else if (e.target.classList.contains("btn-danger")) {
            carrito[e.target.dataset.id].cantidad--;

            if (carrito[e.target.dataset.id].cantidad === 0) {
                delete carrito[e.target.dataset.id];
            }
            pintarCarrito();
        }
    });

    fetchData();
});
