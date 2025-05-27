class SelectablePage {
  visit() {
    cy.visit('https://demoqa.com/selectable');
  }

  clickGridTab() {
    cy.get('#demo-tab-grid').click();
  }

  clickGridItem(label) {
    cy.contains('.list-group-item', label).click();
  }

  isItemSelected(label) {
    return cy.contains('.list-group-item', label).should('have.class', 'active');
  }

  isItemNotSelected(label) {
    return cy.contains('.list-group-item', label).should('not.have.class', 'active');
  }
}

export default SelectablePage;
