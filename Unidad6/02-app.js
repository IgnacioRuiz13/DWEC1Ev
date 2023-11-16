window.addEventListener("load", e => {

    //Cambio del estilo del elemento class navbar-brand
    const brand = document.getElementsByClassName("navbar-brand");
    console.log(brand);

    //Te devuelve una lista de elementos,
    //Por eso seleccionamos solo el primer elemento
    //brand.style.color = "red"; error por eso
    brand[0].style.color = "red";

    //---------------------------------------------------------------------

    const btnJumbo = document.querySelector(".jumbotron a.btn-primary");

    btnJumbo.classList.remove("btn-primary");
    btnJumbo.classList.add("btn-danger");

    //---------------------------------------------------------------------

    const btnCols = document.querySelectorAll(".col-md-6 a.btn-secondary");

    btnCols.forEach(element => {
        element.classList.remove("btn-secondary");
        element.classList.add("btn-danger");
    });

    //---------------------------------------------------------------------

    const cols = document.querySelectorAll(".col-md-6");

    cols[4].style.backgroundColor = "#FE9";
    cols[5].style.backgroundColor = "#FE9";

    cols.forEach(element => {
        element.addEventListener("click",function (e) {
            element.classList.toggle("marcar");
        });
    });

});