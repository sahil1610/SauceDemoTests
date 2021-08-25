import { HtmlReporter } from "../reporters/HtmlReporter";
import { JasmineReporter } from "../reporters/JasmineReporter";

import { browser } from "protractor";
import LogUtil from "../utils/LogUtils";
import { LogLevelEnum } from "../enums/LogLevelEnum";
import constant from "../constants/index";

export const base = {
  framework: "jasmine",

  allScriptsTimeout: 180000,

  SELENIUM_PROMISE_MANAGER: false,

  rootElement: "body",

  suites: {
    sauceDemo: ["../../e2e/specs/SauceDemo.Spec.js"],
  },

  onPrepare: (): void => {
    global.log = new LogUtil(LogLevelEnum[constant.LOG_LEVEL]).getLogger();

    browser.waitForAngularEnabled(false);

    browser.driver.manage().window().maximize();

    browser.executeScript("window.focus();");

    jasmine.getEnv().addReporter(HtmlReporter);

    jasmine.getEnv().addReporter(JasmineReporter);

    const { CustomReporter } = require("../reporters/CustomReporter");
    jasmine.getEnv().addReporter(CustomReporter);
  },

  jasmineNodeOpts: {
    onComplete: null,
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 120000,
  },
};
