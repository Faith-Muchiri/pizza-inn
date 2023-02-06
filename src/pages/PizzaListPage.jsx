import React from 'react'
import PizzasList from '../components/PizzasList';
import pizzas from '../pizza-content'
function PizzaListPage() {
  return (
    <>
      <h1>Pizzas</h1> 
      <PizzasList pizzas={pizzas} />   
    </>
  );
}

export default PizzaListPage