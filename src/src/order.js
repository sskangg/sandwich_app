/**
 * @summary The class that contains the information for a single order.
 */
export default class Order {
  /**
   * Create an order
   * @param {string = ''} orderName - The name of the order defined by the user
   * @param {Object[] = []} itemList - The list of items in the order. Contains the item name, price, and image. These items are objects defined by the structure in ./item.js.
   */

  constructor(orderName = "", itemList = []) {
    this._orderName = orderName;
    this._itemList = itemList;
    this._timeCreated = new Date(Date.now());
    this._timeCompleted = undefined;
    this._id = `${this.orderName}_${this.timeCreated}`;
  }

  get orderName() {
    return this._orderName;
  }

  set orderName(newName) {
    this._orderName = newName;
  }

  get itemList() {
    return this._itemList;
  }

  get timeCreated() {
    return this._timeCreated;
  }

  get timeCompleted() {
    return this._timeCompleted;
  }

  /**
   * Marks the time the order is completed. This can only be done once.
   */
  completeOrder = () => {
    if (!this._timeCompleted) {
      this._timeCompleted = new Date(Date.now());
    }
  };

  /**
   * Add an item to the order
   * @param {Object} newItem - An Item object defined by ./item.js
   */
  addItem = (newItem) => {
    this._itemList.push(newItem);
  };

  /**
   * Returns the number of items in the order
   */
  getNumItems = () => this._itemList.length;

  /**
   * Returns the order's total cost
   * @summary Checks to see if the order is empty, then loops through the items in the order list, summing their prices.
   * @returns {number} - 0.0 if the list is empty or the sum total of the items prices in the item list.
   */
  getTotalCost = () =>
    this._itemList
      .reduce((totalCost, itemObject) => totalCost + itemObject.price, 0.0)
      .toFixed(2);

  getActiveTime = () => {
    let diffMs = this._timeCompleted
      ? this._timeCompleted - new Date()
      : new Date() - this._timeCreated;
    return Math.floor(((diffMs % 86400000) % 3600000) / 60000);
  };

  getCompletionTime = () => {
    let diffMs = this._timeCompleted - this._timeCreated;
    return Math.floor(((diffMs % 86400000) % 3600000) / 60000);
  };
}
