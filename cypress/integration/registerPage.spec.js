const faker = require("faker");

var randomEmail = faker.internet.email();
let pass = faker.internet.password(); // Rowan Nikolaus

/// <reference types  = "cypress" />

describe("Register module", () => {
  it("GA-9 : Register page test", () => {
    cy.visit("/register");
    cy.get(".title-style").should("have.text", "Register");
    cy.get("#first-name").should("be.visible");
    cy.get("#last-name").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#password-confirmation").should("be.visible");
    cy.get(".form-check-input").should("be.visible");
    cy.get(".form-check-label").should( "have.text", "Accepted terms and conditions");
    cy.get(".btn").should("be.visible");
  });

  it("GA-14 : Register page positive test - valid data ", () => {
    cy.visit("/register");
    cy.get("#first-name").type("Te");
    cy.get("#last-name").type("St");
    cy.get("#email").type("test1@test.com");
    cy.get("#password").type("testest1");
    cy.get("#password-confirmation").type("testest1");
    cy.get(".form-check-input").check();
    cy.get(".btn").click();
    cy.get(".alert-danger").should( "have.text", "The email has already been taken."  )
  })

  it("GA-14 : Register page positive test - valid data -randomEmail", () => {
    cy.visit("/register");
    cy.get("#first-name").type("Te");
    cy.get("#last-name").type("St");
    cy.get("#email").type(randomEmail);
    cy.get("#password").type("testest1");
    cy.get("#password-confirmation").type("testest1");
    cy.get(".form-check-input").check();
    cy.get(".btn").click();
  })

  it("GA-23 : Register page - visibility as logged in user ", () => {
    cy.visit("/login");
    cy.get(".nav-link").contains("Login").click();
    cy.get("#email").type("boba.radoslav@gmail.com");
    cy.get("#password").type("bugs1989");
    cy.get(".btn").click();
    cy.wait(5000);
    cy.get(".nav-link nav-buttons").should("be.disabled");
  })

  it("GA-40 : Register page test - First name input field: required", () => {
    cy.visit("/register");
    cy.get("#last-name").type("St");
    cy.get("#email").type(randomEmail);
    cy.get("#password").type("testest1");
    cy.get("#password-confirmation").type("testest1");
    cy.get(".form-check-input").check();
    cy.get(".btn").click();
  })

it("GA-46 : Register page test - Last name input field: required", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Te");
      cy.get("#email").type(randomEmail);
      cy.get("#password").type("testest1");
      cy.get("#password-confirmation").type("testest1");
      cy.get(".form-check-input").check();
      cy.get(".btn").click();
      })

it("GA-54 : Register page test - Email field required", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Te");
      cy.get("#last-name").type("St");
      cy.get("#password").type("testest1");
      cy.get("#password-confirmation").type("testest1");
      cy.get(".form-check-input").check();
      cy.get(".btn").click();
      })  

it("GA-55 : Register page test - Email field format invalid", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Te");
      cy.get("#last-name").type("St");
      cy.get("#email").type("test@test.com1@test.com")
      cy.get("#password").type("testest1");
      cy.get("#password-confirmation").type("testest1");
      cy.get(".form-check-input").check();
      cy.get(".btn").click();
      })  
      
it("GA-59 : Register page test - Password input field empty", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Te");
      cy.get("#last-name").type("St");
      cy.get("#email").type("test1@test.com")
      cy.get("#password-confirmation").type("testest1");
      cy.get(".form-check-input").check();
      cy.get(".btn").click();
      })    
      
it("GA-60 : Register page test - Password Confirm input field empty", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Te");
      cy.get("#last-name").type("St");
      cy.get("#email").type("test1@test.com")
      cy.get("#password").type("testest1");
      cy.get(".form-check-input").check();
      cy.get(".btn").click();
      })   

it("GA - 81 : Confirmation password doesnt match", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Te");
      cy.get("#last-name").type("St");
      cy.get("#email").type("test1@test.com")
      cy.get("#password").type("testest1");
      cy.get("#password-confirmation").type("testest11");
      cy.get(".form-check-input").check();
      cy.get(".btn").click();
      cy.get(".alert-danger").contains('The email has already been taken.').should("have.text","The email has already been taken.");
      cy.get(".alert").contains('The password confirmation does not match.').should("have.text", "The password confirmation does not match.")
      }) 
      
it("GA - 82 : Password form - invalid", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Te");
      cy.get("#last-name").type("St");
      cy.get("#email").type("test1@test.com")
      cy.get("#password").type("testetest");
      cy.get("#password-confirmation").type("testtest");
      cy.get(".form-check-input").check();
      cy.get(".btn").click();
      cy.get(".alert-danger").contains('The email has already been taken.').should("have.text", "The email has already been taken.");
      cy.get(".alert").contains('The password confirmation does not match.').should("have.text", "The password confirmation does not match.")
      }) 

it("GA-83 : Password form - password has less then 8 characters ", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Te");
      cy.get("#last-name").type("St");
      cy.get("#email").type("test1s@test.com")
      cy.get("#password").type("test2");
      cy.get("#password-confirmation").type("test2");
      cy.get(".form-check-input").check();
      cy.get(".btn").click();
      cy.get(".alert").contains('The password must be at least 8 characters.').should("have.text", "The password must be at least 8 characters.")
      }) 

it("GA-84 : User can't register twice ", () => {
      cy.visit("/register");
      cy.get("#first-name").type("test");
      cy.get("#last-name").type("test");
      cy.get("#email").type("ruzictam@gmail.com")
      cy.get("#password").type("testtest2");
      cy.get("#password-confirmation").type("testtest2");
      cy.get(".form-check-input").check();
      cy.get(".btn").click();
      cy.get(".alert").contains('The email has already been taken.').should("have.text" , "The email has already been taken.")
      })       

});
