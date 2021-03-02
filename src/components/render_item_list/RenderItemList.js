import React from "react";
import "./renderItemList.css";

export default function renderOrderList(props) {
  const itemList = props.itemList;

  return (
    <div className={"render-order-list_container"}>
      {itemList
        ? itemList.map((item) => {
            return (
              <div id={item.name}>
                <h3>
                  {item.name}: {item.price}
                </h3>
              </div>
            );
          })
        : "No items selected"}
    </div>
  );
}
