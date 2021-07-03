import React from "react";
import PizzaCss from "./Pizza.module.css";

interface IPizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface IProps {
  pizza: IPizza;
}

export const Pizza: React.FC<IProps> = ({ pizza }) => {
  return (
    <>
      <li className={PizzaCss.container}>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
      </li>
    </>
  );
};
