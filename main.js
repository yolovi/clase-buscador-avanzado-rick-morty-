//GET ELEMENTS

const API_URL = "https://rickandmortyapi.com/api/character/";
const homeNav = document.getElementById("home-nav");
const buscaNav = document.getElementById("busca-nav");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const homeDiv = document.getElementById("home-div");
const buscaDiv = document.getElementById("busca-div");
const formBuscar = document.getElementById("form");
const buscar = document.getElementById("buscar");
const personajesDiv = document.querySelector(".personajes");
const pagesControl = document.getElementById("pages-control");


//FUNCTIONS

//funcion mostrarBuscador
//OK. ocultar contenedor home OK
// OK.el boton de buscar tiene que ser el activo (info azul)
//OK. el boton de home tiene que ser el inactivo (secondary gris claro)
//OK. mostrar el contenedor buscadiv

const mostrarBuscador = () => {
    homeDiv.classList.add("d-none")
    buscaNav.classList.remove("btn-outline-secondary")
    buscaNav.classList.add("btn-info")
    homeNav.classList.remove("btn-info")
    homeNav.classList.add("btn-outline-secondary")
    buscaDiv.classList.remove("d-none")
}


//funcion mostrarHome
//Ok. ocultar contenedor buscadiv
//ok. el boton de home tiene que ser el activo (info azul)
//ok.el boton de buscar tiene que ser el inactivo (secondary gris claro)
//ok. mostrar contenedor home

const mostrarHome = () => {
    buscaDiv.classList.add("d-none")
    homeNav.classList.remove("btn-outline-secondary")
    homeNav.classList.add("btn-info")
    buscaNav.classList.remove("btn-info")
    buscaNav.classList.add("btn-outline-secondary")
    homeDiv.classList.remove("d-none")

}

//LISTENERS
buscaNav.addEventListener("click", mostrarBuscador)
homeNav.addEventListener("click", mostrarHome)





