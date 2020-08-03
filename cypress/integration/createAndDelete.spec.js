import { authPage } from "../page_objects/page.login";
import { LOGIN } from "../fixtures/constants";
import {createPage} from "../page_objects/create.gallery";





/// <reference types  = "cypress" />


beforeEach(() => {
    cy.visit('/login')
    cy.server()
    cy.route('GET',Cypress.env('apiUrl') + '/galleries?page=1&term=',).as('stubing')
    cy.login("boba.radoslav@gmail.com","12345678") 
  })

  
  describe("Create Gallery module", () => {

    it(" Create gallery", () => {
        cy.visit("/create")   
        createPage.create('test','dgadghad','https://pluspng.com/img-png/sea-background-png-play-preview-video-590.jpg')
        cy.wait(5000)
    })

    it(" create 10 galleries", () => {
        for (let i=0;i<10;i++){
            cy.visit("/create")
            createPage.create('test','dgadghad','https://pluspng.com/img-png/sea-background-png-play-preview-video-590.jpg')
            cy.wait(5000)

        }
    })
})