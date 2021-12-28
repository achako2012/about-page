describe('Login modal', () => {
    beforeEach('Redirect to main page', () => {
        cy.visit('/');
    });

    beforeEach('Remove blacklist history', () => {
        console.log('before hook here!');
    });

    describe("User can't log in", () => {
        it('shows error message if credentials are invalid', () => {
            cy.get('.authenticate-button-login').click();
            cy.login('alex01@gmail.com', 'alex01');
            cy.get('[data-about-id="error-message"]').should('be.visible');
        });
    });

    describe('User logs in successfully', () => {
        it('redirects user to home page', () => {
            cy.get('.authenticate-button-login').click();
            cy.login('alex@gmail.com', 'alex01');
            cy.get('.authenticate-button-logout').should('be.visible');
        });
    });
});
