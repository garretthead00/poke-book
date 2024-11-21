import React, { createContext, useEffect, useState } from "react";

export const PokeContext = createContext({});

export const PokeProvider = ({ children }) => {
  const [queryValue, setQueryValue] = useState(null);
  const [pokemonResults, setPokemonResults] = useState(null);
  const [savedPokemon, setSavedPokemon] = useState(null)
  const [starterPokemon, setStarterPokemon] = useState(null)
  const [loadedFeedPokemon, setLoadedFeedPokemon] = useState(null)
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    console.log('Updated queryValue in PokeProvider!!!', queryValue)
  }, [queryValue])

  useEffect(() => {
    console.log('Updated setNextUrl in PokeProvider!!!', nextUrl)
  }, [nextUrl])


  return (
    <PokeContext.Provider
      value={{
        queryValue,
        setQueryValue,
        pokemonResults,
        setPokemonResults,
        savedPokemon,
        setSavedPokemon,
        starterPokemon,
        setStarterPokemon,
        loadedFeedPokemon,
        setLoadedFeedPokemon,
        nextUrl,
        setNextUrl
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
