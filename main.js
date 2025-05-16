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


//VARIABLES
let indexPagina = 1 //actualiza con los botones prev/next
let totalPaginas = 1 //se actualiza con cada búsqueda del personaje

//FUNCTIONS

const controlPaginas = () => {
  btnPrev.classList.toggle("d-none", indexPagina === 1);
  btnNext.classList.toggle("d-none", indexPagina === totalPaginas);
};

//HACE LO MISMO QUE EL TOGGLE PERO ES MÁS LARGO
//const controlPaginas = () => {
// if (indexPagina === 1) {
//   btnPrev.classList.add("d-none");
// } else {
//   btnPrev.classList.remove("d-none");
// }

// if (indexPagina === totalPaginas) {
//   btnNext.classList.add("d-none");
// } else {
//   btnNext.classList.remove("d-none");
// }
//}


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



//funcion mostrarPersonajes
//que recibe los personajes de traer todos
//bucle forEach -> innerHTML -> crear una card con unos estilos .... 

const mostrarPersonajes = (pepito) => {
    personajesDiv.innerHTML = ""
    pepito.forEach((personaje) => {
        personajesDiv.innerHTML += `
                <div class="card border-primary mb-3 col-lg-3 col-xs-12 col-md-6" style="max-width: 20rem;">
                    <div class="personaje">
                    <div class="card-body">
                    <h3 class="card-header">${personaje.name}</h3>
                    <h5 class="card-title">${personaje.status}</h5>
                    <img style="height: 200px; width: 100%; display: block;" src="${personaje.image}"  alt="Card image">
                    </div>
                    </div>
                    </div>
                     `;
    });
};

//funcion traerTodos
//const res: Lamada API y guardar la respuesta de la llamada
//const personajes
//(...)

const traerTodos = async () => {
    try {
        const res = await axios.get(API_URL)
        const personajes = res.data.results
        mostrarPersonajes(personajes)

    } catch (error) {
        console.error(error)
    }
}

traerTodos()


//funcion buscarYMostrar
//const busqueda -> recoge el valor del input
//const res -> llamada a la API->  APIURL+?name
// Ejemplo: https://rickandmortyapi.com/api/character/?name=rick&page=1 
// guardar en variable el personaje filtrado
// llamar a la funcion mostrarPersonajes pasandole el personaje filtrado para que los pinte


const buscarYMostrar = async () => {
    try {
        const busqueda = buscar.value
        console.log(busqueda)
        const res = await axios.get(`${API_URL}?name=${busqueda}`)
        const personajeFiltrado = res.data.results
        console.log(res)
        mostrarPersonajes(personajeFiltrado)

    } catch (error) {
        console.error(error)
    }
}

const buscarPersonajes = async (e) => {
    e.preventDefault();
    try {
        // indexPagina = 1; // Reiniciamos página cada vez que se hace nueva búsqueda
        await buscarYMostrar(); //await porque buscarYMostrar es una función asíncrona (async)
    } catch (error) {
        console.error(error);
    }
};






//LISTENERS
formBuscar.addEventListener("submit", buscarPersonajes);
buscaNav.addEventListener("click", mostrarBuscador)
homeNav.addEventListener("click", mostrarHome)






