import React from "react";
import MenuItem from "../menu_item/MenuItem";
import * as data from "../../data.json";
import "./menu.css";

export default function menu(props) {
  const { addItem, inventory } = props;

  return (
    <div className={"menu_container"}>
      {data.menu.map((itemInfo, index) => {
        let available = true;

        for (let ingredient in itemInfo.ingredients) {
          if (inventory[ingredient] < itemInfo.ingredients[ingredient]) {
            available = false;
          }
        }

        // console.log(
        //   `${itemInfo.name} is ${available ? "available" : "not-available"}`
        // );

        return (
          <MenuItem
            available={available}
            itemInfo={itemInfo}
            addItem={addItem}
            key={index}
          />
        );
      })}
    </div>
  );
}
