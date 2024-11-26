import React from "react";
import ObservableGridTile from "../grid-tile/ObservableGridTile";

const ScrollableGrid = ({ loadMoreContents, selectCard, contents }) => {
  const rehydrateThreshold = contents.length - 4;

  return (
    <div className="w-full overflow-y-scroll p-1">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {contents &&
          contents.length > 0 &&
          contents.map((result, index) => {
            return (
              <ObservableGridTile
                index={index}
                data={result}
                isObserver={index === rehydrateThreshold}
                selectFn={() => selectCard(result)}
                observedFn={loadMoreContents}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ScrollableGrid;
