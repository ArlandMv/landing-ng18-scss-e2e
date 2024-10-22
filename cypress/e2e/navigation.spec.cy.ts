describe('Desktop Navigation Tests', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.viewport(1024, 768);
    });

    it('navigates to Products page', () => {
      cy.get('#products-link').click();
      cy.url().should('include', 'products');
    });

    it('navigates to About page', () => {
      cy.get('#about-link').click();
      cy.url().should('include', 'about');
      cy.contains('About').should('be.visible');
    });

    it('navigates to Home page', () => {
      cy.get('#home-link').click();
      cy.url().should('include', 'home');
      cy.contains('software');
    });
  });
});
