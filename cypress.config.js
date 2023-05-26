const { defineConfig } = require("cypress");
{
  ("defaultCommandTimeout");
  10000;
}

module.exports = defineConfig({
  video: false,
  reporter: "../node_modules/cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
    requestTimeout: 600000,
    responseTimeout: 600000,
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    requestTimeout: 600000,
    responseTimeout: 600000,
    defaultCommandTimeout: 15000,
    hideXHRInCommandLog: true,
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
      hideXHRInCommandLog: true;
    },
  },
});
