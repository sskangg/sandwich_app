import React, { useEffect, useState } from "react";
import "./createOrder.css";
import Menu from "../menu/Menu";
import RenderItemList from "../render_item_list/RenderItemList";

export default function CreateOrder(props) {
  const { data, addOrderToList, cancelOrderCreation, inventory } = props,
    [editingOrder, setEditingOrder] = useState(data.clone());

  // TODO Add inventory check

  const addItem = (itemToAdd) => {
    const updatedOrder = editingOrder.clone();
    updatedOrder.addItem(itemToAdd);
    setEditingOrder(updatedOrder);
  };

  const changeOrderName = (newName) => {
    const updatedOrder = editingOrder.clone();
    updatedOrder.orderName = newName;
    setEditingOrder(updatedOrder);
  };

  const createOrder = () => {
    addOrderToList(editingOrder);
  };

  return (
    <div className={"create-order_container"}>
      <h2>Create Order</h2>
      <div className={"create-order_selection-container"}>
        <form>
          <label htmlFor={"orderName"}>Order Name</label>
          <input
            type={"text"}
            placeholder={"Order name"}
            id={"orderName"}
            onChange={changeOrderName}
          />
        </form>
        <h4>Sandwiches</h4>
        <div className={"create-order_menu"}>
          <Menu addItem={addItem} inventory={inventory} />
        </div>
        <hr />
      </div>
      <div className={"create-order_order-summary-container"}>
        {editingOrder && editingOrder.itemList ? (
          <RenderItemList order={data} />
        ) : null}
      </div>
      <div className={"create-order_buttons-container"}>
        <button className={"button_secondary"} onClick={cancelOrderCreation}>
          Cancel
        </button>
        <button
          className={"button_primary"}
          onClick={(currentOrder) => createOrder(currentOrder)}
        >
          Create
        </button>
      </div>
    </div>
  );
}
