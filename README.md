## Sauce Demo Functional Automation

### Scope
Following cases have been automated for the Sauce Demo Website

1. Login to saucedemo website
2. Add a product to cart
3. Verify correct product has been added
4. Complete the checkout and verify the order is complete

## Tool/Framework Used

1. Protractor
2. Node
3. Webdriver Manager
4. Grunt
5. Typescript

## Brief Overview of the framework/Assignment

1. The tests are implemented using [Protractor](https://www.protractortest.org/#/) which is an end-to-end test framework for Angular and AngularJS applications, but can also be used for Non-angular applications like SauceDemo.com
2. Grunt Runner is being to start the execution of the tests. The reason for using Grunt runner is that we can define various tasks and simply call those tasks via names rather than writing the entire thing on the command line.
3. For reporting purposes, we are using the **protractor-beautiful-reporter** plugin which creates an HTML report for the test run. Apart from this, there is a custom reporter and a JUnit reporting as well.
4. Logging has been implemented using **winston** logger and the default log level is ERROR which can be configured using environment variables.
5. For linting purposes **eslint** has been configured and we can the linter using `npm run lint` command
6. For code formatting, **prettier** has been incorporated which automatically formats the code and it can be executed via `npm run prettier`

## Setup (On local)

1. Node should be installed on the system
2. Install **Webdriver-manager** globally.
   > `npm install -g webdriver-manager`
3. Install **grunt-cli** globally.
   > `npm install -g grunt-cli`
4. Update the webdriver-manager.
   > `webdriver-manager update`
5. Setup the following environment variables required for running the tests.
   1. export **USER_NAME**=standard_user
   2. export **PASSWORD**=secret_sauce
   3. export **LOG_LEVEL**='INFO/ERROR/DEBUG', this defaults to ERROR if not defined
   4. export **SELENIUM_REMOTE_URL**='remote selenium url like http://selenium-server:4545/wd/hub'. This is required if we want to run the tests on a remote selenium server.
6. Open a terminal and navigate to the downloaded test code directory. Install node packages
   > `npm install`

### Running tests on local

#### Start a local selenium server using the following command:

```
webdriver-manager start
```

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at `http://localhost:4444/wd/hub`.

#### Compile the Code

Open the terminal and navigate to the downloaded test code directory and build the code by running the following command

```
npm run build
```

#### Run the tests

To run the tests, execute the following command which will run the tests on the local selenium-webdriver server:

```
npm run test
```

This command will execute the **sauceDemo** suite on the local selenium-webdriver server.

### Running tests on remote server

#### Compile the Code

Open the terminal and navigate to the downloaded test code directory and build the code by running the following command

```
npm run build
```

#### Run the tests

To run the tests, execute the following command which will run the tests on the remote selenium-webdriver server address for which is defined as an environment variable:

```
npm run test.server
```

This command will execute the **sauceDemo** suite on the remote selenium server.

### Circle CI/CD

CI/CD pipeline is also implemented for the said project using Github and CirlceCI. Over here we are running **webdriver-manager** in background and executing tests on that. Report related artifacts are being stored which can be viewed directly on CircleCI.
