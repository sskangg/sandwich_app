import React from "react";
import "./header.css";

export default function header(props) {
  const { numActiveOrders, avgCompletionTime } = props;

  return (
    <div className={"header_container"}>
      <div className={"header_logo"}>
        <img src={"https://picsum.photos/50"} alt={"random logo"} />
        <h3>Deliverr Sandwiches</h3>
      </div>
      <div className={"header_info"}>
        <h4>Active Orders: {numActiveOrders}</h4>
        <h4>Avg. Time: {avgCompletionTime}</h4>
      </div>
    </div>
  );
}
