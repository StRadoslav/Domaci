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
      
    it(" create  gallery", () => {
       cy.visit("/create")
        createPage.create('Galerija@222','dgadghad','https://pluspng.com/img-png/sea-background-png-play-preview-video-590.jpg')
        cy.wait(5000)

    })

     it.only(" click on  gallery", () => {
        // cy.visit("/my-galleries")
         cy.get('.nav-link').contains('My Galleries').click()
         cy.wait(2000)
         cy.get('.box-title').eq(0).click()
         cy.get('.title-style')
         .should('have.text', "Galerija@222")
         .should('be.visible')
         cy.scrollTo('bottom')
         cy.get('.btn-custom').contains('Edit Gallery').click()
               // .should('have.text','Edit Gallery')
                .should('be.visible')
                cy.get('form > :nth-child(3) > :nth-child(3)').click()
                cy.get(':nth-child(3) > .input-group > .form-control').type('https://commons.wikimedia.org/wiki/File:Sea.jpg')
                cy.get('[type=submit]').contains('Submit').click()


                
      
       
      })

  })



      
      

