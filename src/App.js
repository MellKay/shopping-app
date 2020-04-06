import React, { useState } from "react";
import "./App.css";

import {
  bottledBeer,
  toiletRoll,
  plainFlour,
  toothPaste,
} from "../src/data/items.js";

export function addToBasket(abstractBasket, item) {
  // abstractBasket.push(item);
  const numberOfItems = abstractBasket.filter((product) => product === item);
  if (numberOfItems.length >= item.maxBuy) {
    return "You have exceeded your limit!";
  } else return abstractBasket;
}

function App() {
  const [basket, setBasket] = useState([]);

  function addToBasketState(newItem) {
    const updatedBasket = addToBasket(basket, newItem);
    if (updatedBasket === "You have exceeded your limit!") {
      alert("You have exceeded your limit!");
    } else setBasket([...basket, newItem]);
    console.log(basket);
  }

  function removeFromBasket(i) {
    const newBasket = [
      ...basket.slice(0, i),
      {
        ...basket[i],
      },
      ...basket.slice(i + 1),
    ];
    setBasket(newBasket);
  }

  return (
    <div className="App">
      <h1> Shopping Basket </h1>

      <button onClick={() => addToBasketState(bottledBeer)}>
        Add bottledBeer
      </button>
      <button onClick={() => addToBasketState(toiletRoll)}>
        Add toiletRoll
      </button>
      <button onClick={() => addToBasketState(plainFlour)}>
        Add plainFlour
      </button>
      <button onClick={() => addToBasketState(toothPaste)}>
        Add toothPaste
      </button>
      <ul>
        {basket.map((item, i) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// 1. Add to basket (no more than restriction)
// 2. Increment/Decrement items within basket (no more than restriction)
// 3. Show total cost
// Plan what you want things to do, and how you will know if it works or not
// TDD: Write test, make it pass, refactor
