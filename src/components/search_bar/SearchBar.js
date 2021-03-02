import React, { useState, useEffect } from "react";
import "./searchBar.css";

export default function searchBar(props) {
  const updateIncludeCompleted = props.updateIncludeCompleted,
    updateSearchText = props.updateSearchText;

  return (
    <div className={"searchbar_container"}>
      <form>
        <label htmlFor={"searchText"}>Search:</label>
        <input
          type={"text"}
          placeholder={"search orders"}
          id={"searchText"}
          onChange={updateSearchText}
        />
        <input
          type={"checkbox"}
          id={"includeCompleted"}
          name={"includeCompleted"}
          onChange={updateIncludeCompleted}
        />
        <label htmlFor={"includeCompleted"}>Include Completed Orders</label>
      </form>
    </div>
  );
}
