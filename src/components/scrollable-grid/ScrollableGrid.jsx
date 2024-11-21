import React, { useRef } from "react";

const ScrollableGrid = ({ loadMoreContents, contents }) => {
  const rehydrateThreshold = contents.length - 4;
  const observerRef = useRef(null);

  // Observer callback for detecting visibility
  const observeLastItem = (node) => {
    if (observerRef.current) observerRef.current.disconnect(); // Disconnect any previous observer
    observerRef.current = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        entries[0].target.className.includes("observed")
      ) {
        loadMoreContents();
      }
    });
    if (node) observerRef.current.observe(node); // Start observing the new last item
  };

  return (
    <div className="w-full overflow-y-scroll p-1">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {contents &&
          contents.length > 0 &&
          contents.map((result, index) => {
            const inRehydrationThreshold = index === rehydrateThreshold;
            return (
              <div
                key={`result-${index}`}
                ref={inRehydrationThreshold ? observeLastItem : null}
                className={`${
                  inRehydrationThreshold ? "observed" : ""
                } bg-gray-100 p-4 text-center border rounded-lg shadow`}
              >
                <h4>{result.name}</h4>
                <img src={result?.sprites?.front_default} alt="sprite" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ScrollableGrid;
