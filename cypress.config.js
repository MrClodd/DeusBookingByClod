const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2jwcfs',
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
