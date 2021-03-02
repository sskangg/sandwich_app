import React, { useState, useEffect } from "react";
import "./header.css";

export default function header(props) {
  const numActiveOrders = props.numActiveOrders,
    avgCompletionTime = props.avgCompletionTime;

  return (
    <div className={"header_container"}>
      <div className={"header_logo"}></div>
      <div className={"header_info"}>
        <h3>Active Orders: {numActiveOrders}</h3>
        <h3>Avg. Time: {avgCompletionTime}</h3>
      </div>
    </div>
  );
}
