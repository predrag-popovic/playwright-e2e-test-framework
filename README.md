# Automation Framework

Cross-browser. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
Cross-platform. Test on Windows, Linux, and macOS, locally or on CI, headless or headed.
Cross-language. Use the Playwright API in TypeScript, JavaScript, Python, .NET, Java.

Test Mobile Web. Native mobile emulation of Google Chrome for Android and Mobile Safari. The same rendering engine works on your Desktop and in the Cloud.
Playwright can either be used as a part of the Playwright Test test runner (this guide), or as a Playwright Library.
Playwright Test was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. 

You can also:

  - Run tests across all browsers.
  - Execute tests in parallel.
  - Enjoy context isolation out of the box.
  - Capture videos, screenshots and other artifacts on failure.
  - Integrate your POMs as extensible fixtures.
<br />

  ### Tech

Automation Basic Framework in order to work properly uses a number of dependencie:

* [NodeJS](https://nodejs.org/en/) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
* [Playwright](https://playwright.dev/) - Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
<br />

# To Get Started with complete new project
## Installation

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

**Note** Min node version 6.9.x

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code.

* Playwright has its own test runner for end-to-end tests, we call it Playwright Test.

* The easiest way to get started with Playwright Test is to run the init command.

```
# Run from your project's root directory
npm init playwright@latest

# Or create a new project
npm init playwright@latest new-project
```

* This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.ts.
<br />

# To Get Started with this project

## Installation

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

**Note** Min node version 6.9.x

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code.
<br />

## Run Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt which would then install all the dependencies from package.json

```
npm install
```
<br />

# Run test with following command
* Run all the tests

```
npx playwright test
```

* Run a single test file
```
npx playwright test tests/todo-page.spec.ts
```

* Run tests in headed browsers
```
npx playwright test --headed
```
<br />

# Configuration file
* To enjoy all the features that Playwright Test has to offer, you would want to create a configuration file playwright.config.ts (or playwright.config.js). It allows you to run tests in multiple browsers configured as you'd like.

* Here is an example configuration that runs every test in Chromium, Firefox and WebKit, by creating a "project" for each browser configuration. It also specifies two retries and tracing options.
```
// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};
export default config;
```

* Look for more options in the [configuration section](https://playwright.dev/docs/test-configuration).
* Now you can run tests in multiple browsers by default.
```
npx playwright test

Running 5 tests using 5 workers

  ✓ [chromium] › example.spec.ts:3:1 › basic test (2s)
  ✓ [firefox] › example.spec.ts:3:1 › basic test (2s)
  ✓ [webkit] › example.spec.ts:3:1 › basic test (2s)
```
<br />

# Configure NPM scripts
* Playwright Test will automatically pick up playwright.config.js or playwright.config.ts.

```
{
  "scripts": {
    "test": "playwright test"
  }
}
```

* If you put your configuration file in a different place, pass it with --config option.
```
{
  "scripts": {
    "test": "playwright test --config=tests/example.config.js"
  }
}
```

* For more details you can see on playwright page [configuration](https://playwright.dev/docs/test-configuration).
<br />

# Run reports

## List reporter
<br />

* List reporter is default (except on CI where the dot reporter is default). It prints a line for each test being run.
```
npx playwright test --reporter=list
```

```
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: 'list',
};
export default config;
```

* Here is an example output in the middle of a test run. Failures will be listed at the end.

```
npx playwright test --reporter=list
Running 124 tests using 6 workers

  ✓ should access error in env (438ms)
  ✓ handle long test names (515ms)
  x 1) render expected (691ms)
  ✓ should timeout (932ms)
    should repeat each:
  ✓ should respect enclosing .gitignore (569ms)
    should teardown env after timeout:
    should respect excluded tests:
  ✓ should handle env beforeEach error (638ms)
    should respect enclosing .gitignore:
```
<br />

## Line reporter
<br />

* Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests.
```
npx playwright test --reporter=line
```

```
// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: 'line',
};

module.exports = config;
```

* Here is an example output in the middle of a test run. Failures are reported inline.
```
npx playwright test --reporter=line
Running 124 tests using 6 workers
  1) dot-reporter.spec.ts:20:1 › render expected ===================================================

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: 0

[23/124] gitignore.spec.ts - should respect nested .gitignore
```
<br />

## HTML reporter
<br />

* HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.
* By default, HTML report is opened automatically if some of the tests failed. You can control this behavior via the open property in the Playwright config. The possible values for that property are always, never and on-failure (default).

```
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [ ['html', { open: 'never' }] ],
};
export default config;
```

* A quick way of opening the last test run report is:
```
npx playwright show-report
```
* Or if there is a custom folder name:
```
npx playwright show-report my-report
```
<br />

## Allure reporter
<br />

```
# Install
npm i -D allure-playwright

# Run tests
npx playwright test --reporter=line,allure-playwright

# Generate report
allure generate ./allure-results --clean && allure open ./allure-report
```

More details you can find for all [reports] (https://playwright.dev/docs/test-reporters).
