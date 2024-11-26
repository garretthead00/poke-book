import React, { useContext} from "react";
import { IoMdClose } from "react-icons/io";
import { BsBagPlus } from "react-icons/bs";
import { PokeContext } from "../../../context/PokeContext";


const DetailsPanel = ({ pokemon, closePanel }) => {
  const {
    id,
    base_experience,
    stats,
    name,
    types,
    sprites: { front_default: default_sprite },
    abilities,
  } = pokemon;

  const { savedPokemon, setSavedPokemon } = useContext(PokeContext)

  console.log("loaded pokemon: ", pokemon);

  const AbilitiesList = () => {
    console.log("loading abilities: ", abilities);
    return (
      <div className="stats-list-container border-b-2 p-2">
        <span className="text-2xl text-primary text-red-500">Abilities</span>
        <ul className="abilities-list border">
          {abilities.map((ability, index) => (
            <li key={`abilities-list-item-${index}`}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  const StatsList = () => {
    console.log("loading stats: ", stats);
    return (
      <div className="stats-list-container border-b-2 p-2">
        <span className="text-2xl text-primary text-red-500">Stats</span>
        <ul className="stats-list border">
          {stats.map((stat, index) => (
            <li key={`stats-list-item-${index}`}>{stat.stat.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  const TypesList = () => {
    console.log("loading types: ", types);
    return (
      <div className="types-list-container border-b-2 p-2">
        <span className="text-2xl text-primary text-red-500">Types</span>
        <ul className="types-list border">
          {types.map((type, index) => {
            const {
              type: { name, sprites },
            } = type;

            console.log("type: ", { name, sprites });
            return (
              <li key={`types-list-item-${index}`}>
                <h4>{name}</h4>
                {/* <img src={sprite} alt="sprite" /> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const savePokemon = () => {
    console.log('Save Pokemon: ', { name: pokemon.name, savedPokemon})
    if(savedPokemon && savedPokemon.length > 0) {
        setSavedPokemon([...savedPokemon, pokemon])    
    } else {
        setSavedPokemon([pokemon])
    }
    
  }

  return (
    <div
      key="details-panel"
      className="absolute flex flex-col gap-4 w-full h-dvh max-h-dvh bg-gray-100 p-4 text-center border rounded-lg shadow"
    >
      <div
        className="close-panel-button button absolute top-2 right-2 text-2xl"
        onClick={() => closePanel()}
      >
        <IoMdClose />
      </div>
      <h4>{name}</h4>
      <img className="w-64 h-64 border" src={default_sprite} alt="sprite" />
      <div className="details-section border relative h-32">
        <div
          className="save-pokemon-button button absolute top-1 right-1 text-2xl"
          onClick={() => savePokemon()}
        >
          <BsBagPlus />
        </div>
        <h4>{name}</h4>
      </div>
      {types && types.length > 0 && <TypesList />}
      {stats && stats.length > 0 && <StatsList />}
      {abilities && abilities.length > 0 && <AbilitiesList />}
    </div>
  );
};

export default DetailsPanel;
