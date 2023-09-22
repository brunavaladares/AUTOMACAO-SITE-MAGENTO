const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.nublue.co.uk/',
    experimentalRunAllSpecs: true,
    specPattern: [
      'cypress/e2e/CadastroDeUsuario/cadastroDeUsuario.cy.js',
      'cypress/e2e/Login/login.cy.js',
      'cypress/e2e/AdicionarProdutoAoCarrinho/adicionarProdutoCarrinho.cy.js',
      'cypress/e2e/FinalizacaoDeCompra/finalizacaoDeCompra.cy.js'
      ]
    },
});
