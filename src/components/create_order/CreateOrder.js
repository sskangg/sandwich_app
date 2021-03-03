import React, { useEffect, useState } from "react";
import "./createOrder.css";
import Menu from "../menu/Menu";
import RenderItemList from "../render_item_list/RenderItemList";

export default function CreateOrder(props) {
  const {
      data,
      addOrderToList,
      cancelOrderCreation,
      inventory,
      updateInventory
    } = props,
    [editingOrder, setEditingOrder] = useState(data.clone()),
    [validName, setValidName] = useState(!!data.orderName),
    [creationInventory, setCreationInventory] = useState(inventory);

  useEffect(() => {
    document.getElementById("orderName").value = editingOrder.value;
  }, []);

  // TODO Add inventory check

  const addItem = (itemToAdd) => {
    const updatedOrder = editingOrder.clone(),
      updatedInventory = { ...creationInventory };

    for (let ingredient in itemToAdd.ingredients) {
      updatedInventory[ingredient] -= itemToAdd.ingredients[ingredient];
    }

    updatedOrder.addItem(itemToAdd);
    setEditingOrder(updatedOrder);
    setCreationInventory(updatedInventory);
  };

  const changeOrderName = (event) => {
    const newName = event.target.value;
    const updatedOrder = editingOrder.clone();
    updatedOrder.orderName = newName;
    setEditingOrder(updatedOrder);
    setValidName(!!newName);
  };

  const createOrder = () => {
    addOrderToList(editingOrder);
    updateInventory(creationInventory);
  };

  return (
    <div className={"create-order_wrapper"}>
      <div className={"create-order_container"}>
        <div className={"create-order_top-line"}>
          <p className={"create-order_title"}>Create Order:</p>
          <input
            type={"text"}
            placeholder={"Order name"}
            id={"orderName"}
            onChange={changeOrderName}
            className={`create-order_name-input ${validName ? "" : "required"}`}
          />
          {validName ? null : (
            <label className={"required-label"} htmlFor={"orderName"}>
              *required
            </label>
          )}
        </div>
        <div className={"create-order_selection-container"}>
          <h4>Sandwiches</h4>
          <Menu addItem={addItem} inventory={creationInventory} />
          <hr />
        </div>
        <div className={"create-order_order-summary-container"}>
          {editingOrder && editingOrder.itemList ? (
            <RenderItemList order={data} size={"medium"} />
          ) : null}
        </div>
        <div className={"create-order_buttons-container"}>
          <button className={"button_secondary"} onClick={cancelOrderCreation}>
            Cancel
          </button>
          <button
            className={`button_primary ${
              validName && editingOrder.itemList.length !== 0
                ? null
                : "button_disabled"
            }`}
            onClick={(currentOrder) => createOrder(currentOrder)}
            disabled={!validName || editingOrder.itemList.length === 0}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
