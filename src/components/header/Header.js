import React from "react";
import "./header.css";

export default function header(props) {
  const { numActiveOrders, avgCompletionTime } = props;

  return (
    <div className={"header_container"}>
      <div className={"header_logo"}>
        <img
          src={
            "https://deliverr.com/wp-content/uploads/2018/07/deliverr-logo-red-1024x208.png"
          }
          alt={"deliverr logo"}
          className={"header_logo-image"}
        />
        <p className={"header_logo-sandwiches"}>
          <i>Sandwiches</i>
        </p>
      </div>
      <div className={"header_info"}>
        <h4>Active Orders: {numActiveOrders}</h4>
        <h4>Avg. Time: {avgCompletionTime}</h4>
      </div>
    </div>
  );
}
