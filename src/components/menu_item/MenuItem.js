import React from "react";
import Item from "../../src/item";
import "./menuItem.css";

export default function menuItem(props) {
  const { itemInfo, addItem } = props,
    item = new Item(itemInfo);

  const itemClicked = () => {
    addItem(item);
  };

  return (
    <button onClick={itemClicked}>
      <div className={"menu-item_container"}>
        <img src={item.image} alt={`${item.name}`} />
        <h3>{item.name}</h3>
        <p>{item.description ?? ""}</p>
      </div>
    </button>
  );
}
