exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://automationteststore.com',
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle0"
    },
    REST: {
      endpoint: "https://airportgap.dev-tester.com",
      defaultHeaders: {
        'Content-Type': 'application/json',
      },
    },
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    PersonBuilder: './builder/newUser.js',
  },
  bootstrap: null,
  mocha: {
  "reporterOptions": {
    "reportDir": "output"
    }
  },
  name: 'CodeceptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    fakerTransform: {
      enabled: true
    }
  }
}