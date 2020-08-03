import { LOGIN } from "../fixtures/constants";
import { authPage } from "../page_objects/page.login";
import { randomEmail } from "../utils/index";

//var randomMail = faker.internet.email();
//let pass = faker.internet.password(); // Rowan Nikolaus

/// <reference types  = "cypress" />



beforeEach(() => {
  cy.visit('/login')
  cy.server()
  cy.route('GET',Cypress.env('apiUrl') + '/galleries?page=1&term=').as('stubing')
})

describe("Login module", () => {
    it("GA-19 : Login page layout ", () => {
      cy.visit("/login");
      cy.get(".nav-link").contains("Login").click();
      cy.get("#email").should("be.visible");
      cy.get("#password").should("be.visible");
      cy.get(".btn").should("be.visible");
      //cy.wait(5000);
      //cy.get('.nav-link').contains('Logout').should('be.visible');
    })


  it.only("Wait for request to load", () => {
   // cy.request('POST',Cypress.env('apiUrl')+ '/auth/login',{"email":"boba.radoslav@gmail.com","password":"12345678"})
    
   // .then((resp)=>{
     cy.login("boba.radoslav@gmail.com","12345678")  
    //  expect(resp.body).to.have.property('access_token')
     // expect(resp.body).to.have.property('token_type')
    //  localStorage.setItem('token',resp.body.access_token)
    //cy.visit("/");
    cy.wait('@stubing')
    cy.get('@stubing')
    .its('response').then((resp)=>{

      cy.request({

        method:'DELETE',
        url:Cypress.env('apiUrl') + '/galleries' + resp.body.galleries[0].id,
        form:true,
        followRedirect:true,
        headers:{
          authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })
    })
   
    

})
});
