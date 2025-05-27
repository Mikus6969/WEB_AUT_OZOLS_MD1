import SelectablePage from '../pageObjects/SelectablePage';

const selectablePage = new SelectablePage();

describe('Selectable Grid Tests', () => {
  it('should highlight the correct grid items and leave others unselected', () => {
    // Step a: Visit the page
    selectablePage.visit();

    // Step b: Click "Grid"
    selectablePage.clickGridTab();

    // Step c: Click “Two”, “Four”, “Six”, “Eight”
    const selectedItems = ['Two', 'Four', 'Six', 'Eight'];
    selectedItems.forEach(item => selectablePage.clickGridItem(item));

    // Step d: Validate selected items are highlighted
    selectedItems.forEach(item => selectablePage.isItemSelected(item));

    // Step e: Validate unselected items are not highlighted
    const unselectedItems = ['One', 'Three', 'Five', 'Seven', 'Nine'];
    unselectedItems.forEach(item => selectablePage.isItemNotSelected(item));
  });
});
