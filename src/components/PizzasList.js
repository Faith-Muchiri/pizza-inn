import React from 'react'
import { Link } from "react-router-dom"; 

function PizzasList({pizzas}) {
  return (
    <>
      {pizzas.map((pizza) => (
        <Link key={pizza.id} to={`/pizzas/${pizza.id}`}>
          <h3>{pizza.name}</h3>
          <img src={pizza.image_url} alt="" />
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
        </Link>
      ))}
    </>
  );
}

export default PizzasList