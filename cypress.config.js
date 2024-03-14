/*
Arquivo de configurações base da automação Cypress.
*/

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://todomvc.com/examples/dojo/'
  },
});
