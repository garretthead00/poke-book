const POKE_API_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async () => {
  try {
    const res = await fetch(`${POKE_API_URL}/pokemon`);
    const json = await res.json();
    const next = json?.next;
    const pokemonResults = json?.results;

    let pokemonPayload = [];
    for (const result of pokemonResults) {
      const pokemon = await getPokemonWithKey(result.name);
      pokemonPayload.push(pokemon);
    }

    return { pokemonPayload, next };
  } catch (err) {
    console.error("ERROR driverFn: getPokemon. ", err);
  }
};

export const getPokemonWithUrl = async (url) => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    const next = json?.next;
    const pokemonResults = json?.results;

    let pokemonPayload = [];
    for (const result of pokemonResults) {
      const pokemon = await getPokemonWithKey(result.name);
      pokemonPayload.push(pokemon);
    }

    return { pokemonPayload, next };
  } catch (err) {
    console.error("ERROR driverFn: getPokemonWithUrl. ", err);
  }
};

export const getPokemonWithKey = async (key) => {
  try {
    const pokemon = await fetch(`${POKE_API_URL}/pokemon/${key}`);
    return pokemon.json();
  } catch (err) {
    console.error("ERROR driverFn: getPokemonWithKey. ", err);
  }
};
