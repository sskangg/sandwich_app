import React from "react";
import "./searchBar.css";

export default function searchBar(props) {
  const updateIncludeCompleted = props.updateIncludeCompleted,
    updateSearchText = props.updateSearchText;

  return (
    <div className={"searchbar_container"}>
      <div>
        <label htmlFor={"searchText"}>Search:</label>
        <input
          type={"text"}
          placeholder={"search orders"}
          id={"searchText"}
          onChange={updateSearchText}
        />
      </div>
      <div>
        <input
          type={"checkbox"}
          id={"includeCompleted"}
          name={"includeCompleted"}
          onChange={updateIncludeCompleted}
        />
        <label htmlFor={"includeCompleted"}>Include Completed Orders</label>
      </div>
    </div>
  );
}
