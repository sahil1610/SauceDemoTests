const log = global.log;

export const CustomReporter: jasmine.CustomReporter = {
  /**
   * custom msg on test start, initialise browser console
   * @param {jasmine.CustomReporterResult} result
   */
  specStarted: (result: jasmine.SpecResult): void => {
    log.info("*******Spec started: ****** " + result.description);
  },

  /**
   * custom msg on test end, verify and report browser console error (if any)
   * @param {jasmine.CustomReporterResult} result
   */
  specDone: (result: jasmine.SpecResult): void => {
    log.info(
      "*******Spec ended: ****** " +
        result.description +
        " was " +
        result.status
    );
  },
};
