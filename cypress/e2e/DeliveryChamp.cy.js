// Test suite for the search functionality
describe('searchFunctionalityTests', () => {

  // Before each test, visit the homepage
  beforeEach(() => {
    cy.visit('/'); // Replace with your actual website URL
  });

  // Test case for searching by address
  it('shouldSearchByDeliveryAddress', () => {
    // Action: Enter the delivery address in the input field
    cy.get('.address-search > #search-box').type('123 Main Street');

    // Action: Click on the "Search By Address" button
    cy.contains('Search By Address').click();

    // Assertion: Verify that the search results are displayed
    cy.get('.btn_search') // Replace with the actual selector for search results
      .should('be.visible');
  });

  // Test case for searching by cuisine
  it('shouldSearchByCuisineType', () => {
    // Action: Enter the delivery address in the input field
    cy.get('.address-search > #search-box').type('123 Main Street');

    // Action: Click on the "Search By Cuisine" button
    cy.contains('Search By Cuisine').click();

    // Assertion: Verify that the search results are displayed
    cy.get('.glass-search-by-product') // Replace with the actual selector for search results
      .should('be.visible');
  });

  // Test case to verify menu items are displayed after search
  it('shouldDisplayMenuItemsInSearchResults', () => {
    // Action: Enter the delivery address in the input field
    cy.get('.address-search > #search-box').type('Sheikhupura, Pakistan');

    // Action: Click on the "Search" button
    cy.get('.btn_search').contains('Search').click(); // Ensure the selector is correct for the search button

    // Assertion: Verify that menu items are present in the search results
    cy.get('.animated > .row') // Replace with the actual selector for menu items
      .should('be.visible'); // Ensure there is at least one menu item
  });
});