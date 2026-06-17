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
