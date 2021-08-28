import { element, by, browser, promise } from "protractor";
import constant from "../constants/Common";

interface CheckoutYourInfoInterface {
  firstName: string;
  lastName: string;
  zipCode: string;
}

//Checkout Your Information Page
export default class CheckoutYourInformation {
  firstName: string;
  lastName: string;
  zipCode: string;

  constructor(obj: CheckoutYourInfoInterface) {
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.zipCode = obj.zipCode;
  }

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
