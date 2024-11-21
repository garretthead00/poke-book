import React from "react";
import HomeController from "../features/home/HomeController";

export const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="text-3xl font-bold underline mb-4">Home</h1>
      <HomeController />
    </div>
  );
};
