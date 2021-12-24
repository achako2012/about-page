/**
 * @file Cypress is designed in a way to use commands (https://docs.cypress.io/api/cypress-api/custom-commands)
 * instead of plain functions. To make the custom commands working with Typescript we need to
 * define types by ourselves.
 */

declare namespace Cypress {
    interface Chainable {
        /**
         * Types and submits credentials
         */
        login(email: string, password: string): void;
    }
}
