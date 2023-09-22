/// <reference types="cypress" />


describe('Login do cliente no sistema', () => {

    const siteMagento = '[data-container="body"]';
    const singIn = '.panel > .header > .authorization-link > a';
    const inputEmail = '[id="email"]';
    const inputPassword = '[name="login[password]"]';
    
    beforeEach(() => {
      cy.viewport(1280, 720)
      })
  
    it('Fazer o login no cadastro de cliente', () => {
      cy.visit('https://magento2-demo.magebit.com/');
        
      cy.get(siteMagento)
      .should('exist')
      .should('be.visible');  

      cy.get(singIn)
      .should('exist')
      .should('be.visible')
      .click();
      
      cy.get(inputEmail)
      .should('be.visible')
      .type('joao.silva@gmail.com');
      
      cy.get(inputPassword)
      .should('be.visible')
      .type('W123456bv#');

      cy.contains('button', 'Sign In').should('be.visible').click();
      
    }) 
  })
  