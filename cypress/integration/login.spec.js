const faker = require("faker");
import { LOGIN } from "../fixtures/constants";
import { authPage } from "../page_objects/page.login";
import { randomEmail } from "../utils/index";

var randomMail = faker.internet.email();
let pass = faker.internet.password(); // Rowan Nikolaus

/// <reference types  = "cypress" />

beforeEach(() => {
  cy.visit("/login");
  // cy.server()
  // cy.route('https://gallery-api.vivifyideas.com/api/galleries?page=1&term=')
  //cy.wait('@https://gallery-api.vivifyideas.com/api/galleries?page=1&term=')
});

describe("Login module", () => {
  it("GA-19 : Login page layout ", () => {
    cy.visit("/login");
    cy.get(".nav-link").contains("Login").click();
    cy.get("#email").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get(".btn").should("be.visible");
    //cy.wait(5000);
    //cy.get('.nav-link').contains('Logout').should('be.visible');
  });

  it("GA-28 : Login - valid data", () => {
    //cy.visit("/login");
    cy.get(".nav-link").contains("Login").click();
    authPage.login(LOGIN.EMAIL, LOGIN.PASSWORD);
    //authPage.email.type(LOGIN.EMAIL);
    //authPage.pass.type(LOGIN.PASSWORD);
    cy.get(".btn").click();
    cy.wait(5000);
    cy.get(".nav-link").contains("Logout").should("be.visible");
  });

  it("GA-22 : Login - invalid data - username", () => {
    cy.visit("/");
    cy.get(".nav-link").contains("Login").click();
    cy.get("#email").type(randomMail);
    cy.get("#password").type("bugs1989");
    cy.get(".btn").contains("Submit").click();
    cy.get(".alert")
      .should("be.visible")
      .should("have.text", "Bad Credentials");
  });

  it("GA-25:Login - invalid data - password", () => {
    cy.visit("/");
    cy.get(".nav-link").contains("Login").click();
    cy.get("#email").type("boba.radoslav@gmal.com");
    cy.get("#password").type("bugs1989fsfsffs");
    cy.get(".btn").contains("Submit").click();
  });

  it("GA-25:Login - invalid data -EMPTY password", () => {
    //cy.visit("/");
    cy.get(".nav-link").contains("Login").click();

    cy.get("#email").type("boba.radoslav@gmal.com");
    //cy.get("#password").type();
    cy.get(".btn").contains("Submit").click();
    cy.get("#password").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it.only("GA-25:Login - invalid data -EMPTY EMAIL", () => {
    //cy.visit("/");
    cy.get(".nav-link").contains("Login").click();

    //cy.get("#email").type("boba.radoslav@gmal.com");
    cy.get("#password").type(LOGIN.PASSWORD);
    cy.get(".btn").contains("Submit").click();
    cy.get("#email").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });
});
