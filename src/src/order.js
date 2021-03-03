/**
 * @summary The class that contains the information for a single order.
 */
export default class Order {
  /**
   * Create an order
   * @param {string = ''} orderName - The name of the order defined by the user
   * @param {Object[] = []} itemList - The list of items in the order. Contains the item name, price, and image. These items are objects defined by the structure in ./item.js.
   */

  constructor(
    orderName = "",
    itemList = [],
    timeCreated = new Date(),
    timeCompleted = undefined
  ) {
    this._orderName = orderName;
    this._itemList = itemList;
    this._timeCreated = timeCreated;
    this._timeCompleted = timeCompleted;
    this._id = `${this.timeCreated}`;
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

  get id() {
    return this._id;
  }

  /**
   * Placeholder for a deep copy
   * @returns The instances attributes.
   */
  clone = () => {
    // Shallow copy this instance
    const copy = [
      this._orderName,
      [...this.itemList],
      new Date(this.timeCreated),
      this.timeCompleted ? new Date(this.timeCompleted) : undefined,
      this._id
    ];

    return copy;
  };

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
  addItem = (newItem) => this._itemList.push(newItem);

  /**
   * Remove an item from the order
   * @param {Object} item - The Item to remove
   * @returns {Object} - The Item removed
   */
  removeItem = (index) => this._itemList.splice(index, 1)[0];

  /**
   * Returns the number of items in the order
   * @returns {Number}
   */
  getNumItems = () => this._itemList.length;

  /**
   * Returns the order's total cost
   * @summary Checks to see if the order is empty, then loops through the items in the order list, summing their prices.
   * @returns {Number} - 0.0 if the list is empty or the sum total of the items prices in the item list.
   */
  getTotalCost = () =>
    this._itemList
      .reduce((totalCost, itemObject) => totalCost + itemObject.price, 0.0)
      .toFixed(2);

  /**
   * How many minutes the order has been active
   * @returns {Number} - The number of minutes since the order was created.
   */
  getActiveTime = () => {
    let diffMs = this._timeCompleted
      ? this._timeCompleted - new Date()
      : new Date() - this._timeCreated;
    return Math.floor(((diffMs % 86400000) % 3600000) / 60000);
  };

  /**
   * The number of minutes it took to complete the order
   * @returns {Number} - The difference in minutes between order creation and completion
   */
  getCompletionTime = () => {
    let diffMs = this._timeCompleted - this._timeCreated;
    return Math.floor(((diffMs % 86400000) % 3600000) / 60000);
  };
}
