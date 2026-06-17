

let pokemon = null;

async function searchPokemon() {
  const nombrePokemon = document.getElementById("pokemon").value;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`,
    );

    if (!response.ok) {
      throw new Error("Pokémon no encontrado");
    }

    const data = await response.json();

    pokemon = {
      nombre: data.name,
      sprite: data.sprites.front_default,
    };

    document.getElementById("nombre").textContent = data.name;
    document.getElementById("sprite").src = data.sprites.front_default;
  } catch (error) {
    document.getElementById("nombre").textContent = error.message;
    document.getElementById("sprite").src = "";
  }
}

let pokemon = [];

let favoritos = JSON.parse(localStorage.getItem('favoritos'));

function saveFavorite(){

    if(pokemon != undefined){
        if(favoritos == null){
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
        }else{
            //agregar favorito
            favorito = buscarFavorito(id);
            if(favorito == null){
                favoritos.push(objeto);        
            }
        }
    }

    updateFavoriteList();
}   

function buscarFavorito(id){
    let favoritoEncontrado = null;
    if(favoritos != null){
        for (let favorito of favoritos){
            if(favorito.id === id){
                favoritoEncontrado = favorito;
            }
        }
    }
     return favoritoEncontrado;       
}

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
