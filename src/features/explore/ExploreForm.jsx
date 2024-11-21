import React, { useContext, useState } from "react";
import { PokeContext } from "../../context/PokeContext";

export const ExploreForm = () => {
  const { queryValue, setQueryValue } = useContext(PokeContext);

  const [inputValue, setInputValue] = useState(queryValue)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Exploring:", queryValue);
    setQueryValue(inputValue)
  };

  return (
    <div className="container border p-2">
      <form 
        className="form flex flex-row no-wrap gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="flex flex-1 border rounded-lg px-2 py-1"
          placeholder="Explore Pokemon"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Go!
        </button>
      </form>
    </div>
  );
};
