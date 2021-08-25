import { base } from "./base.conf";
import constant from "../constants/index";
import { Config } from "protractor";

base["multiCapabilities"] = [
  {
    browserName: "chrome",
    loggingPrefs: {
      browser: "SEVERE",
    },
    shardTestFiles: true,
    maxInstances: constant.MAX_BROWSER_INSTANCES,
    idleTimeout: 300,
    "goog:chromeOptions": {
      w3c: false,
      args: [
        "--disable-infobars",
        "--disable-dev-shm-usage",
        "--no-sandbox",
        "--ignore-certificate-errors",
      ],
    },
  },
];

export const config: Config = base;
