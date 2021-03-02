import React, { useEffect, useState, useMemo } from "react";
import "./createOrder.css";
import Order from "../../src/order";
import Menu from "../menu/Menu";
import RenderItemList from "../render_item_list/RenderItemList";

export default function CreateOrder(props) {
  const [order] = useState(new Order()),
    [orderName, setOrderName] = useState(),
    [itemList, setItemList] = useState([]),
    { addOrderToList, cancelOrderCreation, inventory } = props;

  // TODO Add inventory check

  useEffect(() => {
    setItemList([...order.itemList]);
    setOrderName(order.orderName);
  }, [order.itemList, order.orderName]);

  const addItem = (itemToAdd) => {
    order.addItem(itemToAdd);
    setItemList([...itemList, itemToAdd]);
  };

  const changeOrderName = (newName) => {
    order.orderName = newName;
    setOrderName(newName);
  };

  const createOrder = () => {
    addOrderToList(order);
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
        <RenderItemList order={order} />
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
