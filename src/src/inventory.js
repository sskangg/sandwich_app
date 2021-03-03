import * as data from "../data.json";

export default class Inventory {
  constructor(inventory = {}) {
    this._inventory = inventory;
  }

  get inventory() {
    return this._inventory;
  }

  clone = () => this._inventory;

  fetchInventory = () => {
    this._inventory = { ...data.inventory };
  };

  subtractItemFromInventory = (item) => {
    let updatedInventory = this._inventory;

    for (let ingredient in item.ingredients) {
      updatedInventory[ingredient] -= item.ingredients[ingredient];
    }

    this._inventory = updatedInventory;
  };

  addItemToInventory = (item) => {
    let updatedInventory = this._inventory;
    for (let ingredient in item.ingredients) {
      updatedInventory[ingredient] += item.ingredients[ingredient];
    }

    this._inventory = updatedInventory;
  };

  addOrderToInventory = (order) => {
    order.itemList.forEach((item) => this.addItemToInventory(item));
  };

  subtractOrderFromInventory = (order) => {
    order.itemList.forEach((item) => this.subtractItemFromInventory(item));
  };
}
