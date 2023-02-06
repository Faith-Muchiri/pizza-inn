import React from 'react'
import pizzas from "../pizza-content";
import { useParams } from 'react-router-dom'
import NotFoundPage from './NotFoundPage';

function PizzaPage() {
  const { pizzaId } = useParams()
  const pizza = pizzas.find(pizza => pizza.id === Number(pizzaId))

  if(!pizza){
    return <NotFoundPage />
  }
  return (
    <>
      <h1>this is pizza page for pizza with  id {pizzaId} its name is {pizza.name}</h1>
      <p>{pizza.name}</p>
      <p>
        <img src={pizza.image_url} alt="pizza image" />
      </p>
      <p>{pizza.ingredients}</p>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p> 
    </>
  );
}

export default PizzaPage