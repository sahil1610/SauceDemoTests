import { element, by, browser, promise } from "protractor";
import constant from "../constants/Common";

//Cart Page
class Cart {
  checkoutButton = element(by.id("checkout"));
  cartItems = element.all(by.className("cart_item"));

  /**
   * Get Product title in cart for the given index
   *
   * @param {number} cartItemIndex
   * @memberof Cart
   */
  getProductTitleByIndex = async (cartItemIndex: number): Promise<string> => {
    await browser.wait(
      constant.EC.presenceOf(this.cartItems.get(cartItemIndex)),
      constant.SHORT_WAIT,
      "Cart hasn't loaded"
    );
    return await this.cartItems
      .get(cartItemIndex)
      .element(by.className("inventory_item_name"))
      .getText();
  };

  /**
   * Get Product Desc in cart for the given index
   *
   * @param {number} cartItemIndex
   * @memberof Cart
   */
  getProductDescByIndex = async (cartItemIndex: number): Promise<string> => {
    return await this.cartItems
      .get(cartItemIndex)
      .element(by.className("inventory_item_desc"))
      .getText();
  };

  /**
   * Get Product Price in cart for the given index
   *
   * @param {number} cartItemIndex
   * @memberof Cart
   */
  getProductPriceByIndex = async (cartItemIndex: number): Promise<string> => {
    return await this.cartItems
      .get(cartItemIndex)
      .element(by.className("inventory_item_price"))
      .getText();
  };

  /**
   * Go to Checkout Page
   *
   * @memberof Cart
   */
  goToCheckoutPage = async (): Promise<void> => {
    this.checkoutButton.click();
    await browser.wait(
      constant.EC.invisibilityOf(this.checkoutButton),
      constant.LONG_WAIT,
      "Checkout page has not loaded"
    );
  };
}

export const cart = new Cart();
