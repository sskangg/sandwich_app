import React from "react";
import RenderItemList from "../render_item_list/RenderItemList";
import "./renderOrder.css";

export default function renderOrder(props) {
  const { order, cancelOrder, completeOrder } = props;

  return (
    <div className={"order_container grid-box"}>
      <div className={"order_header-wrapper"}>
        <div className={"order_header"}>
          <h4 className={"order_name"}>Customer: {order.orderName}</h4>
          <h4
            className={`order_active-time ${
              order.getActiveTime() > 20 ? "urgent" : ""
            }`}
          >
            Active: {order.getActiveTime()} min
          </h4>
        </div>
        <h4>Order Items:</h4>
        <hr />
      </div>
      <div className={"order_item-list-wrapper"}>
        <div className={"order_item-list"}>
          <RenderItemList order={order} />
        </div>
      </div>
      <div className={"order_buttons-wrapper"}>
        <div className={"order_buttons"}>
          {order.timeCompleted ? (
            "Complete"
          ) : (
            <>
              <button className={"button_float"}>{"\u270E"} edit order</button>
              <button
                className={"button_secondary"}
                onClick={() => cancelOrder(order)}
              >
                Cancel
              </button>
              <button
                className={"button_primary"}
                onClick={() => completeOrder(order)}
              >
                Pick Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
