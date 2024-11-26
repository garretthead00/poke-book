import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import ScrollableGrid from "../components/scrollable-grid/ScrollableGrid";

export const BagPage = () => {
  const { savedPokemon, setSavedPokemon } = useContext(PokeContext);

  const PokemonList = () => {
    console.log("loading savedPokemon: ", savedPokemon);
    return (
      <div className="stats-list-container border-b-2 p-2">
        <span className="text-2xl text-primary text-red-500">Saved</span>
        <ul className="stats-list border">
          {savedPokemon.map((pokemon, index) => (
            <li key={`stats-list-item-${index}`}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    );
  };


  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Bag</h1>
      {savedPokemon ? <ScrollableGrid
        contents={savedPokemon}
        loadMoreContents={() => {}}
        selectCard={() => {}}
      /> : <>{`Nothing stored here yet...`}</>}
    </div>
  );
};
