import React, { useState } from "react";
import "./createOrder.css";
import Order from "../../src/order";
import Menu from "../menu/Menu";
import RenderItemList from "../render_item_list/RenderItemList";

export default function CreateOrder(props) {
  const [orderName, setOrderName] = useState(),
    [itemList, setItemList] = useState([]),
    { addOrderToList, cancelOrderCreation, inventory } = props;

  // TODO Add inventory check

  const addItem = (itemToAdd) => setItemList([...itemList, itemToAdd]);

  const createOrder = () => {
    addOrderToList(new Order(orderName, itemList));
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
            onChange={(event) => setOrderName(event.target.value)}
          />
        </form>
        <Menu addItem={addItem} inventory={inventory} />
      </div>
      <div className={"create-order_order-summary-container"}>
        <RenderItemList itemList={itemList} />
      </div>
      <div className={"create-order_buttons-container"}>
        <button onClick={cancelOrderCreation}>Cancel</button>
        <button onClick={(currentOrder) => createOrder(currentOrder)}>
          Create
        </button>
      </div>
    </div>
  );
}
