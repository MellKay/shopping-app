import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";
import {
  bottledBeer,
  toiletRoll,
  plainFlour,
  toothPaste,
} from "../src/data/items.js";

import { addToBasketState } from "./App.js";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("No more than the item limit can be in the basket", () => {
  act(() => {
    render(<App />, container);
  });
  let actual = addToBasketState(plainFlour);
  let expected = plainFlour.maxBuy;
  expect(actual).toBeLessThanOrEqual(expected);
});

test("No more than the item limit can be added to the basket", () => {
  let basket = [bottledBeer, bottledBeer, bottledBeer, bottledBeer];
  let actual = addToBasket(basket, bottledBeer);
  let expected = "You have exceeded your limit!";
  expect(actual).toBe(expected);
});

test("Total Cost", () => {
  const basket = [
    bottledBeer,
    bottledBeer,
    bottledBeer,
    bottledBeer,
    toiletRoll,
    plainFlour,
    toothPaste,
    toothPaste,
  ];

  let actual = calculateCost(basket);
  let expected = 20.45;
  expect(actual).toBe(expected);
});
