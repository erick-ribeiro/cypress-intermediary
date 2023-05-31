const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    specPattern: "cypress/*/**/*.cy.{js,jsx,ts,tsx}"
  },
  fixturesFolder: false,
  video: false,
});