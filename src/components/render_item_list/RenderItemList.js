import React from "react";
import "./renderItemList.css";

export default function renderItemList(props) {
  const { order, size, removeItem } = props,
    itemList = order.itemList;

  return (
    <div className={"render-item-list_container"}>
      <div className={`render-item_item-list list-size_${size}`}>
        {itemList
          ? itemList.map((item, index) => {
              return (
                <div
                  className={`render-item-list_item`}
                  id={item.name}
                  key={index}
                >
                  <div className={"render-item-list_text-wrapper"}>
                    {size === "medium" && (
                      <button
                        className={"render-item-list_remove-item-button"}
                        onClick={() => removeItem(index)}
                      >
                        {"\u2715"}
                      </button>
                    )}
                    <p>{item.name}</p>
                  </div>
                  <div className={"render-item-list_price-wrapper"}>
                    <p>${item.price}</p>
                  </div>
                </div>
              );
            })
          : "No items selected"}
      </div>
      <hr />
      <div className={"render-item-list_total"}>
        <h3>Total ${order.getTotalCost()}</h3>
      </div>
    </div>
  );
}
