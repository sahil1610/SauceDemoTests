import { element, by, browser, promise } from "protractor";
import constant from "../constants/Common";

//Checkout OverView Page
class CheckoutOverview {
  finishButton = element(by.id("finish"));

  /**
   * Finish the checkout Process
   *
   * @memberof CheckoutOverview
   */
  finishCheckout = async (): Promise<void> => {
    await this.finishButton.click();
    await browser.wait(
      constant.EC.invisibilityOf(this.finishButton),
      constant.LONG_WAIT,
      "Checkout complete page has not loaded"
    );
  };
}

export const checkoutOverview = new CheckoutOverview();
