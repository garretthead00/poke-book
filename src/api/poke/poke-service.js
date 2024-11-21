import { getPokemon, getPokemonWithKey, getPokemonWithUrl } from "./poke-api";

export const fetchPokemon = async (key) => {
  if (!key || key === "") return await getPokemon();

  const pokemonRes = await getPokemonWithKey(key);
  return [pokemonRes];
};

export const fetchMorePokemon = async (nextUrl) => {
  if (!nextUrl || nextUrl === "") return;

  return await getPokemonWithUrl(nextUrl);
};
