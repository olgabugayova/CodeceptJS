exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://automationteststore.com',
      show: true,
      browser: 'chromium',
      ChaiWrapper: {
        "require": "codeceptjs-chai"
      },
    },
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    apparelCategoryPage: './pages/apparelCategory.js',
    cartPage: './pages/cart.js',
    productPage: './pages/product.js',
    shoesPage: './pages/shoes.js',
    categoryMenu: './fragments/categoryMenu.js',
    checkoutConfirmationPage: './pages/checkoutConfirmation.js',
    checkoutSuccessPage: './pages/checkoutSuccess.js',
    invoicePage: './pages/invoice.js',
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