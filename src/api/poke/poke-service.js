import {
  getPokemon,
  getPokemonWithKey,
  getPokemonWithUrl,
} from "./poke-api";

export const fetchPokemon = async (key) => {
  if (!key || key === "") return await getPokemon();

  const pokemonRes = await getPokemonWithKey(key);
  return [pokemonRes];
};

export const fetchMorePokemon = async (nextUrl) => {
  if (!nextUrl || nextUrl === "") return;

  return await getPokemonWithUrl(nextUrl);
};

export const fetchRandomSortPokemon = async () => {
  const MAX_ID_RANGE = 151;
  const LIST_LENGTH = 20;
  const idList = Array.from({ length: LIST_LENGTH }, () =>
    Math.floor(Math.random() * MAX_ID_RANGE + 1)
  );

  let pokemonPayload = [];
  for (const id of idList) {
    const pokemon = await getPokemonWithKey(id);
    pokemonPayload.push(pokemon);
  }

  return { pokemonPayload };
};
