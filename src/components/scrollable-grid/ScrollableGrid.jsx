import React, { useCallback, useState, useEffect, useRef } from "react";

const ScrollableGrid = ({ loadMoreContents, contents }) => {
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  // Load more items when the user scrolls near the bottom
  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 100 // Threshold
    ) {
      loadMoreContents();
    }

    loadMoreContents();
  };

  // useEffect(() => {
  //   const container = containerRef.current;
  //   container.addEventListener("scroll", handleScroll);
  //   console.log("loading");
  //   return () => container.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    console.log("got contents, ", contents);
  }, [contents]);

    // Observer callback for detecting visibility
    const observeLastItem = useCallback((node) => {
      if (observerRef.current) observerRef.current.disconnect(); // Disconnect any previous observer
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log('visible!!', entries)
          loadMoreContents();
        }
      });
      if (node) observerRef.current.observe(node); // Start observing the new last item
    }, []);

  return (
    <div
      // ref={containerRef}
      className="w-full overflow-y-scroll p-1"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {contents &&
          contents.length > 0 &&
          contents.map((result, index) => {
            return (
              <div
                key={`result-${index}`}
                ref={index === contents.length - 1 ? observeLastItem : null}
                className="bg-gray-100 p-4 text-center border rounded-lg shadow"
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
