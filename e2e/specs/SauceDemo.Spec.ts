import Login from "../pages/Login.Page";
import loginData from "../data/Login.Data";
import { headerComponent } from "../pages/components/Header.Component";
import { inventory } from "../pages/Inventory.Page";
import { cart } from "../pages/Cart.Page";
import CheckoutYourInformation from "../pages/Checkout.Your.Information.Page";
import checkoutData from "../data/Checkout.Data";
import { checkoutOverview } from "../pages/Checkout.Overview.Page";
import { checkoutComplete } from "../pages/Checkout.Complete.Page";

describe("Sauce Demo Tests", () => {
  let login: Login;
  let checkoutYourInformation: CheckoutYourInformation;
  let productTitle: string;
  let productDesc: string;
  let productPrice: string;
  const productIndex = 1;

  beforeAll(async () => {
    login = new Login(loginData);
    checkoutYourInformation = new CheckoutYourInformation(checkoutData);
    await login.fillAndSubmitLoginForm();
  });

  it("to verify that there are 6 products in inventory", async () => {
    expect(await inventory.getTotalItemsInInventory()).toEqual(
      6,
      "6 products should be present in the Inventory"
    );
  });

  it("to verify that the cart of empty", async () => {
    expect(await headerComponent.isCartEmpty()).toBeTruthy("Cart is Not Empty");
  });

  it("to add a product", async () => {
    // storing the product details before adding them to cart, this will be used in verification
    productTitle = await inventory.getProducTitleByIndex(productIndex);
    productDesc = await inventory.getProducDescByIndex(productIndex);
    productPrice = await inventory.getProducPriceByIndex(productIndex);
    await inventory.addProductToCartBasedOnIndex(productIndex);
    expect(await headerComponent.getCartProductCount()).toEqual(
      1,
      "Cart should contain 1 product"
    );
  });

  it("to open cart and verify correct product has been added to cart", async () => {
    const cartItemIndex = 0;
    await headerComponent.openCartPage();
    expect(await cart.getProductTitleByIndex(cartItemIndex)).toEqual(
      productTitle
    );
    expect(await cart.getProductDescByIndex(cartItemIndex)).toEqual(
      productDesc
    );
    expect(await cart.getProductPriceByIndex(cartItemIndex)).toEqual(
      productPrice
    );
  });

  it("to Complete Checkout", async () => {
    await cart.goToCheckoutPage();
    await checkoutYourInformation.fillAndSubmitCheckoutForm(
      checkoutData.firstName,
      checkoutData.lastName,
      checkoutData.zipCode
    );
    await checkoutOverview.finishCheckout();
    expect(
      await checkoutComplete.checkoutCompleteHeader.isDisplayed()
    ).toBeTruthy(
      "Thank you for your header is not visible on the Checkout Complete page"
    );
    expect(await checkoutComplete.checkoutCompleteHeader.getText()).toEqual(
      "THANK YOU FOR YOUR ORDER"
    );
  });
});
