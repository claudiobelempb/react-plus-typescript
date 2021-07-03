import React from "react";
import pizzas from "../data/pizzas.json";
import { Pizza } from "./Pizza";

export const App = () => {
  return (
    <>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </>
  );
};
