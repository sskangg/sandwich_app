import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import SearchBar from "./components/search_bar/SearchBar";
import RenderOrder from "./components/render_order/RenderOrder";
import CreateOrder from "./components/create_order/CreateOrder";
import Order from "./src/order";
import * as data from "./data.json";
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
  const [numActiveOrders, setNumActiveOrders] = useState(0),
    [avgCompletionTime, setAvgCompletionTime] = useState(0),
    [searchText, setSearchText] = useState(""),
    [includeCompletedToggle, setIncludeCompletedToggle] = useState(false),
    [orderList, setOrderList] = useState([]),
    [completedOrders, setCompletedOrders] = useState([]),
    [inventory, setInventory] = useState(data.inventory),
    [newOrder, setNewOrder] = useState(undefined);

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const updateIncludeCompleted = (event) => {
    setIncludeCompletedToggle(!includeCompletedToggle);
  };

  const createNewOrder = () => {
    setNewOrder(new Order());
  };

  const cancelOrderCreation = () => {
    setNewOrder(undefined);
  };

  const addOrderToList = (newOrder) => {
    setOrderList([newOrder, ...orderList]);
    cancelOrderCreation();
  };

  const cancelOrder = (order) => {
    // TODO add dialogue box to confirm cancel
    const index = orderList.indexOf(order);
    let modifiedOrderList = [...orderList];
    modifiedOrderList.splice(index, 1);
    setOrderList(modifiedOrderList);
  };

  const completeOrder = (order) => {
    const completedOrder = order;
    order.completeOrder();
    setAvgCompletionTime(
      avgCompletionTime +
        order.getCompletionTime() / (completedOrders.length + 1)
    );
    setCompletedOrders([completedOrder, ...completedOrders]);
    cancelOrder(order);
  };

  return (
    <>
      <Header
        numActiveOrders={numActiveOrders}
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
        <div className={"order-grid_create"}>
          {newOrder ? (
            <CreateOrder
              addOrderToList={addOrderToList}
              cancelOrderCreation={cancelOrderCreation}
              inventory={inventory}
              data={newOrder}
            />
          ) : null}
        </div>
        <div className={"order-grid_wrapper"}>
          <div className={"order-grid_grid"}>
            <>
              {orderList.map((order, index) => (
                <RenderOrder
                  order={order}
                  cancelOrder={cancelOrder}
                  completeOrder={completeOrder}
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
