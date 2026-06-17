let pokemon = [];
let favoritos = [];

function updateFavoritesList() {

    const favorito = JSON.parse(localStorage.getItem("favoritos")) || [];

    const contenedor = document.getElementById("favoritos");

    contenedor.innerHTML = "";

    favorito.forEach( pokemon => {
        const card = document.createElement("div");
        card.classList.add("pokemon-favorito");

        card.innerHTML = `
            <img src = "${pokemon.imagen}" alt = "${pokemon.nombre}">
            <h3> ${pokemon.nombre}</h3>
        `


    });

    contenedor.appendChild(card);

}

document.addEventListener("DOMContentLoaded", () => {
    updateFavoritesList();
})