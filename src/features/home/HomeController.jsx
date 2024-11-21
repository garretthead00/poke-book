import React, { useCallback, useEffect, useState, useContext } from "react";
import ScrollableGrid from "../../components/scrollable-grid/ScrollableGrid";
import { fetchPokemon, fetchMorePokemon } from "../../api/poke/poke-service";

import { PokeContext } from "../../context/PokeContext";

const HomeController = () => {
  const { loadedFeedPokemon, setLoadedFeedPokemon, nextUrl, setNextUrl } =
    useContext(PokeContext);

  //   const [loadedPokemon, setLoadedPokemon] = useState(null);
  //   const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    const { pokemonPayload, next } = await fetchPokemon();
    setLoadedFeedPokemon(pokemonPayload);
    console.group("-----TEST-----");
    console.log("TEST: loadPokemon: ", { pokemonPayload, next });
    console.groupEnd();
    setNextUrl(next);
  };

  const loadNextPokemon = useCallback(async () => {
    console.log("Loading more!!!", nextUrl);
    // if (nextUrl && nextUrl !== "") {
    //   const { pokemonPayload, next } = await fetchMorePokemon(nextUrl);

    //   console.group("-----TEST-----");
    //   console.log("nextPokemon, ", { loadedFeedPokemon, pokemonPayload, next });
    //   console.groupEnd();
    //   setLoadedFeedPokemon([...loadedFeedPokemon, ...pokemonPayload]);
    //   setNextUrl(next);
    // }
  }, [nextUrl]);

  const loadMore = async () => {
    console.log("Loading more!!!", nextUrl);
    if (nextUrl && nextUrl !== "") {
      const { pokemonPayload, next } = await fetchMorePokemon(nextUrl);
      console.group("-----TEST-----");
      console.log("nextPokemon, ", { loadedFeedPokemon, pokemonPayload, next });
      console.groupEnd();

      setLoadedFeedPokemon([...loadedFeedPokemon, ...pokemonPayload]);
      setNextUrl(next);
    }
  };

  useEffect(() => {
    console.group("-----TEST-----");
    console.log("loadedPokemon!!!, ", { loadedFeedPokemon, nextUrl });
    console.groupEnd();
  }, [loadedFeedPokemon]);

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
        loadMoreContents={() => loadMore()}
      />
    </div>
  );
};

export default HomeController;
