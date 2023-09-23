/// <reference types="cypress" />


describe('Finalizar uma compra', () => {

    const siteMagento = '[data-container="body"]';
    const singIn = '.panel > .header > .authorization-link > a';
    const inputEmail = '[id="email"]';
    const inputPassword = '[name="login[password]"]';
    const product = '[class="product-image-container product-image-container-1564"]';
    const optionSize = '[data-option-label="M"]';
    const optionColor = '[data-option-label="Purple"]';
    const productRadiantTee = '[id="product-addtocart-button"]';
    const carrinho = '.counter-number';
    const buttonProceedToCheckout = '[id="top-cart-btn-checkout"]';
    const inputStreetAddress = '[name="street[0]"]';
    const selectCountry = '[name="country_id"]';
    const optionCountry = '[data-title="São Paulo"]';
    const setectStateProvince = '[name="region_id"]';
    const optionStateProvince = '[data-title="Brazil"]';
    const inputCity = '[id="IJGD1B9"]';
    const inputZipPostalCode = '[id="YN3OH2Y"]';
    const inputPhoneNumber = '[id="Q9YVS0S"]';
    const inputShippingMethodsFixed = '[type="radio"]';
    const buttonNext = '[id="top-cart-btn-checkout"]';
    //const input = '';
    //const input = '';
    //const input = '';
    //const input = '';
    //const input = '';
    
    beforeEach(() => {
      cy.viewport(1280, 720)
      })
  
      it('Finalizar compra do cliente', () => {
        cy.visit('https://magento2-demo.magebit.com/');
          
        cy.get(siteMagento).should('exist').should('be.visible');  
        cy.get(singIn).should('exist').should('be.visible').click();
        cy.get(inputEmail).should('be.visible').type('vanessa.sousa@gmail.com');
        cy.get(inputPassword).should('be.visible').type('BV123457896@');
        cy.contains('button', 'Sign In').should('be.visible').click();
        cy.get(product).should('be.visible').click();
        cy.get(optionSize).should('be.visible').click();
        cy.get(optionColor).should('be.visible').click();
        cy.get(productRadiantTee).should('be.visible').click();
        cy.get(carrinho).should('be.visible').click();
        cy.get(buttonProceedToCheckout).should('be.visible').click();
        cy.wait(10000)
        cy.get(inputStreetAddress).should('be.visible').type('Rua Euclides Zerbini');
        cy.get(selectCountry).should('be.visible')
        cy.select(selectCountry);
        cy.get(setectStateProvince).should('be.visible').select();
        cy.get(inputCity).should('be.visible').type('São Paulo');
        cy.get(inputZipPostalCode).should('be.visible').type('08340222');
        cy.get(inputPhoneNumber).should('be.visible').type('11976894537');
        cy.get(inputShippingMethodsFixed).should('be.visible').click();
        cy.contains('button', 'Next').should('be.visible').click();

    }) 
  })
  