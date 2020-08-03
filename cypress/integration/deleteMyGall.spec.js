import { authPage } from "../page_objects/page.login";
import { LOGIN } from "../fixtures/constants";
import {createPage} from "../page_objects/create.gallery";





/// <reference types  = "cypress" />



beforeEach(() => {
    cy.visit('/login')
    cy.server()
    cy.route('GET',Cypress.env('apiUrl') + '/my-galleries?page=1&term=').as('stubing')
    cy.login("boba.radoslav@gmail.com","12345678") 
  })
  describe("Delete Gallery module", () => {

  it.only("Wait for request to load", () => {
    // cy.request('POST',Cypress.env('apiUrl')+ '/auth/login',{"email":"boba.radoslav@gmail.com","password":"12345678"})
     
    // .then((resp)=>{
      cy.login("boba.radoslav@gmail.com","12345678")  
     //  expect(resp.body).to.have.property('access_token')
      // expect(resp.body).to.have.property('token_type')
     //  localStorage.setItem('token',resp.body.access_token)
     cy.visit("/my-galleries")
     cy.wait('@stubing')
     cy.get('@stubing').
     its('response').then((resp)=>{
         //cy.log(resp)
         for(var i=0 ; i<10 ; i++){
         let useCaseID = resp.body.galleries[i].id
 
        cy.request({
        method:'DELETE',
         url:Cypress.env('apiUrl') + '/galleries/' + resp.body.galleries[i].id,
         form:true,
         followRedirect:true,
         headers: {
           authorization: `Bearer ${window.localStorage.getItem('token')}`,
         
         }
       })
    }
     })
    })

})
 
  
