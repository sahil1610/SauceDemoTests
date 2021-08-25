import reporter from "jasmine-reporters";

/**
 * Initailise jasmine reporter
 * @type {reporter.JUnitXmlReporter}
 */
export const JasmineReporter = new reporter.JUnitXmlReporter({
  consolidateAll: false,
  consolidate: false,
  savePath: "junit_report",
});
