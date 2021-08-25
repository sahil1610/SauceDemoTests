import { element, by } from "protractor";

//Checkout Complete Page
class CheckoutComplete {
  checkoutCompleteHeader = element(by.css(".checkout_complete_container h2"));
}

export const checkoutComplete = new CheckoutComplete();
