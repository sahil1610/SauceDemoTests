import { browser, ElementFinder } from "protractor";
import { Condition, WebDriver } from "selenium-webdriver";

/**
 * custom wait with wait cond, timeout and failure message
 */
//@typescript-eslint/ban-types
/*eslint-disable */
let customWait = async <T>(
  condition:
    | PromiseLike<T>
    | Condition<T>
    | ((driver: WebDriver) => T | PromiseLike<T>)
    | Function,
  timeout: number,
  message: string
): Promise<any> => {
  await browser.wait(condition, timeout, message);
};
/*eslint-enable */

/**
 * custom wait for checking url change
 * @param {string} url
 * @param {number} timeout
 * @param {string} message
 * @returns {Promise<any>}
 */
const waitForUrlToChange = async (
  url: string,
  timeout: number,
  message: string
): Promise<any> => {
  await customWait(
    async function () {
      const currentUrl = await browser.driver.getCurrentUrl();
      return RegExp(url).test(currentUrl);
    },
    timeout,
    message
  );
};

export { customWait, waitForUrlToChange };
