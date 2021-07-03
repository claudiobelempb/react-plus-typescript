import React from "react";

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
      <li>{pizza.name}</li>
      <li>{pizza.description}</li>
      <li>{pizza.price}</li>
    </>
  );
};
