import React from "react";
import "./searchBar.css";

export default function searchBar(props) {
  const updateIncludeCompleted = props.updateIncludeCompleted,
    updateSearchText = props.updateSearchText;

  return (
    <div className={"searchbar_container"}>
      <div>
        <input
          type={"text"}
          placeholder={"Search orders"}
          id={"searchText"}
          onChange={updateSearchText}
          className={"searchbar_text-input"}
        />
      </div>
      <div className={"searchbar_checkbox-container"}>
        <input
          type={"checkbox"}
          id={"includeCompleted"}
          name={"includeCompleted"}
          onChange={updateIncludeCompleted}
          className={"searchbar_includeCompleted-toggle"}
        />
        <label
          className={"searchbar_includeCompleted-label"}
          htmlFor={"includeCompleted"}
        >
          Include Completed Orders
        </label>
      </div>
    </div>
  );
}
