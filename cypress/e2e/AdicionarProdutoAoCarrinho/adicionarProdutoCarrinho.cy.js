/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Cadastro do cliente no sistema', () => {

    const siteMagento = '[data-container="body"]';
    const singIn = '.panel > .header > .authorization-link > a';
    const inputEmail = '[id="email"]';
    const inputPassword = '[name="login[password]"]';
    const product = '[class="product-image-container product-image-container-1564"]';
    const inputConfirmPassword = '[id="password-confirmation"]';
    const buttonCreateAnAccountClient = '[title="Create an Account"]';
    //const product = ':nth-child(1) > .product-item-info';
    
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
        .type('danielasousa@hotmail.com');
        cy.get(inputPassword)
        .should('be.visible')
        .type('BV123457896@');
        cy.contains('button', 'Sign In')
        .should('be.visible')
        .click();

        cy.get(product)
        .should('be.visible')
        .click();

    }) 
  })
  