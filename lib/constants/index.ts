export default {
  LOCAL: "http://localhost:4444",
  SELENIUM_REMOTE_URL: process.env.SELENIUM_REMOTE_URL,
  MAX_BROWSER_INSTANCES: 10,
  LOG_LEVEL: process.env.LOG_LEVEL || "ERROR",
};
