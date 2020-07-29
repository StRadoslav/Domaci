import { authPage } from "../page_objects/page.login";
import { LOGIN } from "../fixtures/constants";
import {createPage} from "../page_objects/create.gallery";





/// <reference types  = "cypress" />


beforeEach(() => {
    cy.visit("/login")
     authPage.login(LOGIN.EMAIL, LOGIN.PASSWORD);
     //cy.get(".nav-link").contains("Submit").click();
     cy.get(".btn").contains('Submit').click();
     cy.wait(5000);
    // cy.get('a[href="/create"]').click()
    
  });

  
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


    it.only(" DELETE 10 galleries", () => {
        for (let i=0;i<10;i++){
           cy.visit('/my-galleries')
            cy.wait(2000)
            cy.get('.box-title').eq(0).click()
            cy.get('.btn-custom').contains('Delete Gallery').click()
            
            

        }
    })

    

   



})



