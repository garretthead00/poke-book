import React, { useRef } from 'react'

const ObservableGridTile = ({index, selectFn, observedFn, data, isObserver}) => {
    const observerRef = useRef(null);

    // Observer callback for detecting visibility
    const observeLastItem = (node) => {
      if (observerRef.current) observerRef.current.disconnect(); // Disconnect any previous observer
      observerRef.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          entries[0].target.className.includes("observed")
        ) {
          console.log('loading more!!!')
          observedFn();
        }
      });
      if (node) observerRef.current.observe(node); // Start observing the new last item
    };

    return (
      <div
        key={`result-${index}`}
        ref={isObserver ? observeLastItem : null}
        className={`${
            isObserver ? "observed" : ""
          } bg-gray-100 p-4 text-center border rounded-lg shadow`}
        onClick={selectFn}
      >
        <h4>{data.name}</h4>
        <img src={data?.sprites?.front_default} alt="sprite" />
      </div>
    );
}

export default ObservableGridTile
