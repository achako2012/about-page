// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', (email: string, password: string): void => {
    cy.get('[data-about-id="email-input"]').type(email);
    cy.get('[data-about-id="password-input"]').type(password);
    cy.get('[data-about-id="submit-button"]').click();
});
