import React, { useEffect, useState, useContext } from "react";
import ScrollableGrid from "../../components/scrollable-grid/ScrollableGrid";
import { fetchPokemon, fetchMorePokemon } from "../../api/poke/poke-service";

import { PokeContext } from "../../context/PokeContext";

const HomeController = () => {
  const { loadedFeedPokemon, setLoadedFeedPokemon } = useContext(PokeContext);

  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    const { pokemonPayload, next } = await fetchPokemon();
    setLoadedFeedPokemon(pokemonPayload);
    setNextUrl(next);
  };

  const loadMore = async () => {
    if (nextUrl && nextUrl !== "") {
      const { pokemonPayload, next } = await fetchMorePokemon(nextUrl);
      setNextUrl(next);
      setLoadedFeedPokemon([...loadedFeedPokemon, ...pokemonPayload]);
    }
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
      />
    </div>
  );
};

export default HomeController;
