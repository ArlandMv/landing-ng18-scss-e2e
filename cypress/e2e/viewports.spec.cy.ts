const viewports = [
  { device: 'iPhone 6/7/8', width: 375, height: 667 },
  { device: 'iPad (Portrait)', width: 768, height: 1024 },
  { device: 'Laptop (13-inch)', width: 1280, height: 800 },
  { device: 'Desktop (1920x1080)', width: 1920, height: 1080 },
];

describe('Responsive Design Tests', () => {
  viewports.forEach((viewport) => {
    it(`Should display correctly on ${viewport.device}`, () => {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('/');

      if (viewport.width <= 768) {
        // mobile menu
        cy.get('button[data-collapse-toggle="mobile-menu-2"]').click();
      }

      cy.get('#about-link').click();
      cy.url().should('include', '/about');
      cy.contains('About').should('be.visible');
    });
  });
});
