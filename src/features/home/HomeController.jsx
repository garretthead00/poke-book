import React, { useEffect, useContext, useState } from "react";
import ScrollableGrid from "../../components/scrollable-grid/ScrollableGrid";
import DetailsPanel from "./components/DetailsPanel";
import { fetchRandomSortPokemon } from "../../api/poke/poke-service";

import { PokeContext } from "../../context/PokeContext";

const HomeController = () => {
  const { loadedFeedPokemon, setLoadedFeedPokemon } = useContext(PokeContext);

  const [showDetailsPanel, setShowDetailsPanel] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    const { pokemonPayload } = await fetchRandomSortPokemon();
    console.log("loadPokemon: pokemonPayload -> ", pokemonPayload);
    setLoadedFeedPokemon(pokemonPayload);
  };

  const loadMore = async () => {
    const { pokemonPayload } = await fetchRandomSortPokemon();
    setLoadedFeedPokemon([...loadedFeedPokemon, ...pokemonPayload]);
  };

  const toggleDetailsPanel = (selectedPokemon) => {
    setShowDetailsPanel(!selectedPokemon ? false : true);
    setSelectedPokemon(!selectedPokemon ? null : selectedPokemon);
  };

  if (!loadedFeedPokemon) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <div className="relative flex w-full m-0 p-0">
      <ScrollableGrid
        contents={loadedFeedPokemon}
        loadMoreContents={loadMore}
        selectCard={toggleDetailsPanel}
      />
      {showDetailsPanel && <DetailsPanel pokemon={selectedPokemon} closePanel={() => setShowDetailsPanel(false)}/>}
    </div>
  );
};

export default HomeController;
