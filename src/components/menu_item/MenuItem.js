import React from "react";
import Item from "../../src/item";
import "./menuItem.css";

export default function menuItem(props) {
  const { itemInfo, addItem, available } = props,
    item = new Item(itemInfo);

  const itemClicked = () => {
    addItem(item);
  };

  const buildItemDescription = () => {
    let ingredients = "",
      counter = 1,
      numIngredients = Object.keys(item.ingredients).length;

    for (let ingredient in item.ingredients) {
      let punctuation = ", ";
      if (counter === numIngredients) {
        ingredients = ingredients.concat("and ");
        punctuation = ".";
      }
      let capitalizedIngredient =
        ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
      ingredients = ingredients.concat(capitalizedIngredient + punctuation);
      counter += 1;
    }
    return ingredients;
  };

  return (
    <button
      className={`menu-item_button ${available ? null : "button_disabled"}`}
      onClick={itemClicked}
      disabled={!available}
    >
      <div className={"menu-item_container"}>
        <img
          className={"menu-item_image"}
          src={item.image}
          alt={`${item.name}`}
        />
        <p className={"menu-item_description"}>
          <b>{item.name} Sandwich</b>:{" "}
          {available ? buildItemDescription() : "Unavailable"}
        </p>
      </div>
    </button>
  );
}
