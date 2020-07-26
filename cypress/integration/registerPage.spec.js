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
    cy.get(".form-check-label").should(
      "have.text",
      "Accepted terms and conditions"
    );
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
    cy.get(".alert-danger").should(
      "have.text",
      "The email has already been taken."
    );
  });

  it("GA-14 : Register page positive test - valid data -randomEmail", () => {
    cy.visit("/register");
    cy.get("#first-name").type("Te");
    cy.get("#last-name").type("St");
    cy.get("#email").type(randomEmail);
    cy.get("#password").type("testest1");
    cy.get("#password-confirmation").type("testest1");
    cy.get(".form-check-input").check();
    cy.get(".btn").click();
  });

  it("GA-23 : Register page - visibility as logged in user ", () => {
    cy.visit("/login");
    cy.get(".nav-link").contains("Login").click();
    cy.get("#email").type("boba.radoslav@gmail.com");
    cy.get("#password").type("bugs1989");
    cy.get(".btn").click();
    cy.wait(5000);
    cy.get(".nav-link nav-buttons").should("be.disabled");
  });

  it.only("GA-40 : Register page test - First name input field: required", () => {
    cy.visit("/register");
    cy.get("#last-name").type("St");
    cy.get("#email").type(randomEmail);
    cy.get("#password").type("testest1");
    cy.get("#password-confirmation").type("testest1");
    cy.get(".form-check-input").check();
    cy.get(".btn").click();
  });
});
