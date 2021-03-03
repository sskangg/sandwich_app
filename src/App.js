import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import SearchBar from "./components/search_bar/SearchBar";
import RenderOrder from "./components/render_order/RenderOrder";
import CreateOrder from "./components/create_order/CreateOrder";
import Order from "./src/order";
import Inventory from "./src/inventory";
import "./styles.css";

/**
 * Instructions
 *
 * Use JavaScript, React, and CSS to complete the following prompt.
 *
 * DO NOT use other libraries or packages. This includes state management (redux), styling, routing, etc.
 * DO NOT use the codesandbox upload feature. Complete the entire exercise using codesandbox.
 *
 * Prompt
 *
 * You run a restaurant selling sandwiches and need some way of keeping track orders.
 * Create a React app that allows your employees to create new orders and show when they've been picked up.
 *
 * 1. Create a form where a user can create orders.
 * - A user should be able to see each sandwich and how much they cost.
 * - A user should be able to add sandwiches to the order using a button.
 * - A user should not be able to add a sandwich we don't have ingredients for (see data.json).
 * - A user should be able to see all items in an order.
 * - A user should be able to see the total cost of the order.
 * - A user should be able to complete the order using a button.
 *
 * 2. Create a component that display all active orders.
 * - A user should be able to see all "open" orders.
 * - A user should be able to uniquely identify orders from one another.
 * - A user should be able to see all items in an order.
 * - A user should be able to see the total cost of the order.
 * - A user should be able to mark the order as "picked-up" by clicking a button.
 * - A user should be able to clearly distinguish "open" and "picked-up" orders.
 */

export default function App() {
  const [avgCompletionTime, setAvgCompletionTime] = useState(0),
    [searchText, setSearchText] = useState(""),
    [includeCompletedToggle, setIncludeCompletedToggle] = useState(false),
    [orderList, setOrderList] = useState([]),
    [completedOrders, setCompletedOrders] = useState([]),
    [inventory, setInventory] = useState(undefined),
    [newOrder, setNewOrder] = useState(undefined);

  useEffect(() => {
    let newInventory = new Inventory();
    newInventory.fetchInventory();
    setInventory(newInventory);
  }, []);

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const updateIncludeCompleted = () => {
    setIncludeCompletedToggle(!includeCompletedToggle);
  };

  const createNewOrder = () => {
    setNewOrder(new Order());
  };

  const cancelOrderCreation = () => {
    setNewOrder(undefined);
  };

  const addOrderToList = (newOrder) => {
    const existingOrder = orderList.find((order) => order.id === newOrder.id),
      updatedOrderList = [...orderList];

    if (existingOrder) {
      let index = orderList.indexOf(existingOrder);
      updatedOrderList[index] = newOrder;
    } else {
      updatedOrderList.unshift(newOrder);
    }

    setOrderList(updatedOrderList);
    cancelOrderCreation();
  };

  const removeOrder = (order) => {
    let updatedOrderList = [...orderList];
    const index = orderList.indexOf(order),
      removedOrder = updatedOrderList.splice(index, 1)[0];

    setOrderList(updatedOrderList);
    return removedOrder;
  };

  const cancelOrder = (order) => {
    // TODO add dialogue box to confirm cancel
    const updatedInventory = new Inventory({ ...inventory.clone() }),
      removedOrder = removeOrder(order);

    updatedInventory.addOrderToInventory(removedOrder);

    setInventory(updatedInventory);
  };

  const completeOrder = (order) => {
    const completedOrder = order;
    order.completeOrder();
    setAvgCompletionTime(
      avgCompletionTime +
        order.getCompletionTime() / (completedOrders.length + 1)
    );
    setCompletedOrders([completedOrder, ...completedOrders]);
    removeOrder(order);
    cancelOrderCreation();
  };

  const editOrder = (order) => {
    setNewOrder(order);
  };

  return (
    <>
      <Header
        numActiveOrders={orderList.length}
        avgCompletionTime={avgCompletionTime}
      />
      <main>
        <div className={"tool-bar"}>
          <SearchBar
            searchText={searchText}
            includeCompleted={includeCompletedToggle}
            updateSearchText={updateSearchText}
            updateIncludeCompleted={updateIncludeCompleted}
          />
          <div>
            <button
              className={"order-grid_create-button button_primary"}
              onClick={createNewOrder}
            >
              New Order
            </button>
          </div>
        </div>
        {/* <div>{JSON.stringify(inventory && inventory.inventory)}</div> */}
        {newOrder ? (
          <CreateOrder
            addOrderToList={addOrderToList}
            cancelOrderCreation={cancelOrderCreation}
            editOrder={editOrder}
            inventory={inventory}
            data={newOrder}
            updateInventory={setInventory}
          />
        ) : null}
        <div className={"order-grid_wrapper"}>
          <div className={"order-grid_grid"}>
            <>
              {orderList.map((order, index) => (
                <RenderOrder
                  order={order}
                  cancelOrder={cancelOrder}
                  completeOrder={completeOrder}
                  editOrder={editOrder}
                  key={index}
                />
              ))}
            </>
            {includeCompletedToggle ? (
              <>
                {completedOrders.map((order, index) => (
                  <RenderOrder
                    order={order}
                    cancelOrder={cancelOrder}
                    completeOrder={completeOrder}
                    key={index}
                  />
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
