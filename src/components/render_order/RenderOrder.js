import React from "react";
import RenderItemList from "../render_item_list/RenderItemList";
import "./renderOrder.css";

export default function renderOrder(props) {
  const { order, cancelOrder, completeOrder } = props;

  return (
    <div className={"order_container"}>
      <div className={"order_header"}>
        <h3 className={"order_name"}>Customer: {order.orderName}</h3>
        <h3 className={"order_active-time"}>Active: {order.getActiveTime()}</h3>
      </div>
      <div className={"order_item-list"}>
        <RenderItemList itemList={order.itemList} />
        <div className={"order_item-list-total"}>
          <h3>Total {order.getTotalCost()}</h3>
        </div>
      </div>
      <div className={"order_buttons"}>
        {order.timeCompleted ? (
          "Complete"
        ) : (
          <>
            <button>edit order</button>
            <button onClick={() => cancelOrder(order)}>Cancel</button>
            <button onClick={() => completeOrder(order)}>Pick Up</button>
          </>
        )}
      </div>
    </div>
  );
}
