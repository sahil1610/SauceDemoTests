import reporter from "protractor-beautiful-reporter";

/**
 * initialise html reporter
 */
export const HtmlReporter = new reporter({
  preserveDirectory: false,
  takeScreenShotsOnlyForFailedSpecs: true,
  title: "Sauce Demo",
  screenshotsSubfolder: "images",
  jsonsSubfolder: "jsons",
  baseDirectory: "html_report",
  sortFunction: function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) {
      return -1;
    } else if (a.sessionId > b.sessionId) {
      return 1;
    }

    if (a.timestamp < b.timestamp) {
      return -1;
    } else if (a.timestamp > b.timestamp) {
      return 1;
    }

    return 0;
  },
}).getJasmine2Reporter();
