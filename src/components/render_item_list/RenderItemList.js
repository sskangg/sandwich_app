import React from "react";
import "./renderItemList.css";

export default function renderOrderList(props) {
  const { order } = props,
    itemList = order.itemList;

  return (
    <div className={"render-item-list_container"}>
      {itemList
        ? itemList.map((item) => {
            return (
              <div className={"render-item-list_item"} id={item.name}>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            );
          })
        : "No items selected"}
      <hr />
      <div className={"order_item-list-total"}>
        <h3>Total ${order.getTotalCost()}</h3>
      </div>
    </div>
  );
}
