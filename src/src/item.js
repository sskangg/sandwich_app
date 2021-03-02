/**
 * @summary The class that contains the information for a single item. This is used to make the menu.
 */
export default class Item {
  /**
   * Create an item
   * @param {string} name
   * @param {number} price
   * @param {string} image - This is a url reference to the item's image in the app.
   * @param {Object} ingredients - Keys: Ingredient, Value: Num required to make item. Used for inventory management.
   */
  constructor(itemInfo) {
    let { name, price, image, ingredients } = itemInfo;
    this._name = name;
    this._price = price;
    this._image = image;
    this._ingredients = ingredients;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get image() {
    return this._image;
  }

  set image(newImageURL) {
    this._image = newImageURL;
  }

  get ingredients() {
    return this._ingredients;
  }
}
