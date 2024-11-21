import React from "react";
import { ExploreForm, ExploreResultsList } from "./index";

export const ExploreController = () => {
  return (
      <div className="container">
        <ExploreForm />
        <ExploreResultsList />
      </div>
  );
};
