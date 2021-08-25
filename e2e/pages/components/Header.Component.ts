import { element, by, browser } from "protractor";
import constant from "../../constants/Common";

class HeaderComponent {
  shoppingCartContainer = element(by.id("shopping_cart_container"));
  shoppingCartBadge = element(by.className("shopping_cart_badge"));

  /**
   * Open the cart page
   */
  openCartPage = async (): Promise<void> => {
    await browser.wait(
      constant.EC.elementToBeClickable(this.shoppingCartContainer),
      constant.SHORT_WAIT,
      "Cart Container is not clickable"
    );
    await this.shoppingCartContainer.click();
  };

  /**
   * Get the number of total products in cart
   *
   * @return {Promise<number>}
   */
  getCartProductCount = async (): Promise<number> => {
    const shoppingCartBadgeValue = await this.shoppingCartBadge.getText();
    return parseInt(shoppingCartBadgeValue);
  };

  /**
   * Checks if cart is empty or not
   *
   * @return {Promise<boolean>}
   */
  isCartEmpty = async (): Promise<boolean> => {
    return !(await this.shoppingCartBadge.isPresent());
  };
}

export const headerComponent = new HeaderComponent();
