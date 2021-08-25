import { element, by, browser } from "protractor";
import { waitForUrlToChange } from "../../lib/utils/CommandUtil";
import constant from "../constants/Common";

interface LoginInterface {
  username: string;
  password: string;
}

export default class LoginPage {
  username: string;
  password: string;
  constructor(obj: LoginInterface) {
    this.username = obj.username;
    this.password = obj.password;
  }

  //Inputs
  usernameInput = element(by.id("user-name"));
  passwordInput = element(by.id("password"));

  //Buttons
  loginButton = element(by.id("login-button"));

  /**
   * Fill and Submit the login form
   *
   * @memberof LoginPage
   */
  fillAndSubmitLoginForm = async (): Promise<void> => {
    await browser.get(browser.baseUrl);
    await browser.wait(
      constant.EC.visibilityOf(this.usernameInput),
      constant.LONG_WAIT,
      "Email input box is not visible"
    );
    await this.usernameInput.sendKeys(this.username);
    await this.passwordInput.sendKeys(this.password);
    await this.loginButton.click();
    await waitForUrlToChange(
      "inventory",
      constant.LONG_WAIT,
      "User has not been logged in"
    );
  };
}
