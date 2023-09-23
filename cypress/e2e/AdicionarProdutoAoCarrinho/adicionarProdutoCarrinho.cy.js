/// <reference types="cypress" />


describe('Colocar procuto no carrinho', () => {

    const siteMagento = '[data-container="body"]';
    const singIn = '.panel > .header > .authorization-link > a';
    const inputEmail = '[id="email"]';
    const inputPassword = '[name="login[password]"]';
    const product = '[class="product-image-container product-image-container-1564"]';
    const optionSize = '[data-option-label="M"]';
    const optionColor = '[data-option-label="Purple"]';
    const productRadiantTee = '[id="product-addtocart-button"]';
    
    beforeEach(() => {
      cy.viewport(1280, 720)
      })
  
      it('Adicionar compra no carrinho', () => {
        cy.visit('https://magento2-demo.magebit.com/');
          
        cy.get(siteMagento).should('exist').should('be.visible');  
        cy.get(singIn).should('exist').should('be.visible').click();
        cy.get(inputEmail).should('be.visible').type('barbosajoao@outlook.com');
        cy.get(inputPassword).should('be.visible').type('BV123457896@');
        cy.contains('button', 'Sign In').should('be.visible').click();
        cy.get(product).should('be.visible').click();
        cy.get(optionSize).should('be.visible').click();
        cy.get(optionColor).should('be.visible').click();
        cy.get(productRadiantTee).should('be.visible').click();

    }) 
  })
  