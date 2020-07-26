const faker = require('faker');

var randomEmail = faker.internet.email();
let pass = faker.internet.password(); // Rowan Nikolaus


/// <reference types  = "cypress" />

describe('Login module', () => {
  it('GA-19 : Login page layout ', () => {
    cy.visit('/login')
    cy.get('.nav-link').contains('Login').click();
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('.btn').should("be.visible");
    //cy.wait(5000);
    //cy.get('.nav-link').contains('Logout').should('be.visible');
  
  })
  
  it('GA-28 : Login - valid data', () => {
      cy.visit('/login')
      cy.get('.nav-link').contains('Login').click();
      cy.get('#email').type('boba.radoslav@gmail.com');
      cy.get('#password').type('bugs1989');
      cy.get('.btn').click();
      cy.wait(5000);
      cy.get('.nav-link').contains('Logout').should('be.visible');
    })

    it.only('GA-22 : Login - invalid data - username', () => {
      cy.visit('/');
      cy.get('.nav-link').contains('Login').click();
      cy.get('#email').type(randomEmail);
      cy.get('#password').type('bugs1989');
      cy.get('.btn').contains("Submit").click();
      cy.get('.alert').should('be.visible')
                      .should('have.text','Bad Credentials') 
    })

    it('GA-25:Login - invalid data - password', () => {
      cy.visit('/')
      cy.get('.nav-link').contains('Login').click()
      cy.get('#email').type('boba.radoslav@gmal.com')
      cy.get('#password').type('bugs1989fsfsffs')
      cy.get('.btn').contains("Submit").click()
    })
  });

