/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Cadastro do cliente no sistema', () => {

    const siteMagento = '[data-container="body"]';
    const buttonCreateAnAccount = '.panel > .header > :nth-child(3) > #idc0FpCrTx';
    const inputFirstName = '[id="firstname"]';
    const inputLastName = '[id="lastname"]';
    const inputeEmail = '[id="email_address"]';
    const inputPassword = '[id="password"]';
    const inputConfirmPassword = '[id="password-confirmation"]';
    const buttonCreateAnAccountClient = '[title="Create an Account"]';
    
    beforeEach(() => {
      cy.viewport(1280, 720)
      })
  
    it('Fazer cadastro de cliente', () => {
      cy.visit('https://magento2-demo.magebit.com/');
        
      cy.get(siteMagento)
      .should('exist')
      .should('be.visible');

      cy.get(buttonCreateAnAccount).click();
      
      cy.get(siteMagento)
      .should('exist')
      .should('be.visible');
      
      cy.get(inputFirstName)
      .should('be.visible')
      .type(faker.person.firstName());

      cy.get(inputLastName)
      .should('be.visible')
      .type(faker.person.lastName());

      cy.get(inputeEmail)
      .should('be.visible')
      .type(faker.internet.email());

      cy.get(inputPassword)
      .should('be.visible')
      .type('W123456bv#');

      cy.get(inputConfirmPassword)
      .should('be.visible')
      .type('W123456bv#');

      cy.get(buttonCreateAnAccountClient)
      .should('be.visible')
      .click();

    }) 
  })
  