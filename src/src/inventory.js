import * as data from "../data.json";

/**
 * The class that contains information about the inventory.
 */
export default class Inventory {
  /**
   * Create an Inventory
   * @param {Object = {}} inventory - Can be initialized with an existing inventory object, otherwise it creates an empty inventory object.
   */
  constructor(inventory = {}) {
    this._inventory = inventory;
  }

  get inventory() {
    return this._inventory;
  }

  /**
   * Placeholder for a deep clone.
   * @returns The instance's attributes
   */
  clone = () => this._inventory;

  /**
   * Placeholder for a API call to the inventory. Copies the data.json inventory in place of the API call and sets the instance's inventory to the response.
   */
  fetchInventory = () => {
    this._inventory = { ...data.inventory };
  };

  /**
   * Subtracts an item's ingredients from the inventory
   * @param {Object} item - An Item object defined by ./item.js
   */
  subtractItemFromInventory = (item) => {
    let updatedInventory = this._inventory;

    for (let ingredient in item.ingredients) {
      updatedInventory[ingredient] -= item.ingredients[ingredient];
    }

    this._inventory = updatedInventory;
  };

  /**
   * Adds an item's ingredients to the inventory
   * @param {Object} item - An Item object defined by ./item.js
   */
  addItemToInventory = (item) => {
    let updatedInventory = this._inventory;
    for (let ingredient in item.ingredients) {
      updatedInventory[ingredient] += item.ingredients[ingredient];
    }

    this._inventory = updatedInventory;
  };
  /**
   * Adds all ingredients from an order to the inventory
   * @param {Object} order - An Order object defined by ./order.js
   */
  addOrderToInventory = (order) => {
    order.itemList.forEach((item) => this.addItemToInventory(item));
  };

  /**
   * Subtracts all ingredients from an order from the inventory
   * @param {Object} order - An Order object defined by ./order.js
   */
  subtractOrderFromInventory = (order) => {
    order.itemList.forEach((item) => this.subtractItemFromInventory(item));
  };
}
