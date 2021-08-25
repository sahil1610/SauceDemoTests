import { element, by, browser, promise } from "protractor";
import constant from "../constants/Common";

//Checkout Your Information Page
class CheckoutYourInformation {
  firstNameInput = element(by.id("first-name"));
  lastNameInput = element(by.id("last-name"));
  zipCodeInput = element(by.id("postal-code"));
  continueButton = element(by.id("continue"));

  /**
   * Fill and Submit the Checkout Your Information form
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} zipCode
   * @memberof CheckoutYourInformation
   */
  fillAndSubmitCheckoutForm = async (
    firstName: string,
    lastName: string,
    zipCode: string
  ): Promise<void> => {
    await browser.wait(
      constant.EC.visibilityOf(this.firstNameInput),
      constant.LONG_WAIT,
      "Checkout page has not loaded"
    );
    await this.firstNameInput.sendKeys(firstName);
    await this.lastNameInput.sendKeys(lastName);
    await this.zipCodeInput.sendKeys(zipCode);
    await this.continueButton.click();
    await browser.wait(
      constant.EC.invisibilityOf(this.firstNameInput),
      constant.LONG_WAIT,
      "Checkout Overview page has not loaded"
    );
  };
}

export const checkoutYourInformation = new CheckoutYourInformation();
