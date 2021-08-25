let Constant = require("./build/lib/constants/index").default;
let execSync = require("child_process").execSync;

let isServerUp = (isLocal, address) => {
  address = isLocal === 1 ? address + "/wd/hub" : address + "/grid/console";
  let response;
  if (process.platform === "win32") {
    response = execSync(
      "curl -s " + address + " --connect-timeout 5 & echo %errorlevel%"
    ).toString("utf8");
  } else {
    response = execSync(
      "curl -s " + address + " --connect-timeout 5;echo $?"
    ).toString("utf8");
  }
  return isLocal === 1 ? response.trim() === "0" : response.length !== 2;
};

module.exports = function (grunt) {
  grunt.initConfig({
    protractor: {
      options: {
        keepAlive: false,
        suite: grunt.option("suite"),
        args: {
          baseUrl: grunt.option("baseUrl"),
          seleniumAddress: "<%= seleniumAddress %>",
          params: {
            suite: grunt.option("suite"),
          },
        },
      },
      chrome: {
        options: {
          configFile: "./build/lib/config/chrome.conf.js",
        },
      },
    },
  });

  grunt.registerTask("e2erunner", () => {
    let isLocal, address;

    if (!grunt.option("baseUrl")) {
      grunt.fail.warn("Please specify --baseUrl argument.");
    }

    if (grunt.option("local")) {
      grunt.config.set("seleniumAddress", Constant.LOCAL + "/wd/hub");
      [isLocal, address, task] = [1, Constant.LOCAL, "protractor:chrome"];
    } else if (grunt.option("remoteServer")) {
      grunt.config.set("seleniumAddress", Constant.SELENIUM_REMOTE_URL);
      [isLocal, address, task] = [
        0,
        Constant.SELENIUM_REMOTE_URL.replace("/wd/hub", ""),
        "protractor:chrome",
      ];
    } else {
      grunt.fail.warn(
        "Either specify --local for testing on your system's browser(s) or --remoteServer for running on our grid."
      );
    }

    if (isServerUp(isLocal, address)) {
      grunt.log.writeln("Successfully started executing e2e tests.");
      grunt.task.run(task);
    } else {
      grunt.fail.warn("Remote Server is Down. Plz restart hub and nodes.");
    }
  });

  grunt.loadNpmTasks("grunt-protractor-runner");
};
