import React, { useCallback, useContext, useEffect } from "react";
import { PokeContext } from "../../context/PokeContext";
import { fetchPokemon } from "../../api/poke/poke-service";

export const ExploreResultsList = () => {
  const { queryValue, pokemonResults, setPokemonResults } = useContext(PokeContext);

  useEffect(() => {
    loadPokemon();
    console.log('setPokemonResults loaded: ', setPokemonResults)
    
  }, [setPokemonResults, queryValue]);

  const loadPokemon = useCallback(async () => {
    if(setPokemonResults) {
        const { pokemonPayload } = await fetchPokemon(queryValue)
        setPokemonResults(pokemonPayload)
    }    
  }, [queryValue, setPokemonResults])

  useEffect(()=>{ console.log('gotNewResults!!!, ', pokemonResults)}, [pokemonResults])

  if (!pokemonResults) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <ul className="border">
        {pokemonResults &&
          pokemonResults.length > 0 &&
          pokemonResults.map((result, index) => {
            return (
            <li key={`result-${index}`}>
              <h4>{result.name}</h4>
              <img src={result?.sprites?.front_default} alt="sprite" />
            </li>);
          })}
      </ul>
    </>
  );
};
