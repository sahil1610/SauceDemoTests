import { element, by, browser, WebElement, ElementFinder } from "protractor";
import constant from "../constants/Common";

class Inventory {
  productTiles = element.all(by.className("inventory_item"));
  addRemoveItemFromCartButtons = element.all(by.css(".inventory_item button"));
  productTitle = element.all(by.className("inventory_item_name"));
  productDesc = element.all(by.className("inventory_item_desc"));
  productPrice = element.all(by.className("inventory_item_price"));

  /**
   * Get number of items in Inventory
   *
   * @memberof Inventory
   */
  getTotalItemsInInventory = async (): Promise<number> => {
    return await this.productTiles.count();
  };

  /**
   * Add a Product to cart based on product index
   *
   * @param {number} productIndex
   * @memberof Inventory
   */
  addProductToCartBasedOnIndex = async (
    productIndex: number
  ): Promise<void> => {
    await this.addRemoveItemFromCartButtons.get(productIndex).click();
  };

  /**
   * Get the product title based on product index
   *
   * @param {number} productIndex
   * @memberof Inventory
   */
  getProducTitleByIndex = async (productIndex: number): Promise<string> => {
    return await this.productTitle.get(productIndex).getText();
  };

  /**
   * Get the product Description based on product index
   *
   * @param {number} productIndex
   * @memberof Inventory
   */
  getProducDescByIndex = async (productIndex: number): Promise<string> => {
    return await this.productDesc.get(productIndex).getText();
  };

  /**
   * Get the product Price based on product index
   *
   * @param {number} productIndex
   * @memberof Inventory
   */
  getProducPriceByIndex = async (productIndex: number): Promise<string> => {
    return await this.productPrice.get(productIndex).getText();
  };
}

export const inventory = new Inventory();
