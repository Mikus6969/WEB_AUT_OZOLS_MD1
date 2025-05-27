import SelectablePage from '../pageObjects/SelectablePage';

const selectablePage = new SelectablePage();

describe('Selectable Grid Tests', () => {
  it('should highlight the correct grid items and leave others unselected', () => {
   
    selectablePage.visit();

 
    selectablePage.clickGridTab();

    // Click Two, Four, Six, Eight
    const selectedItems = ['Two', 'Four', 'Six', 'Eight'];
    selectedItems.forEach(item => selectablePage.clickGridItem(item));

    // Validate selected items are highlighted
    selectedItems.forEach(item => selectablePage.isItemSelected(item));

    // Validate unselected items are not highlighted
    const unselectedItems = ['One', 'Three', 'Five', 'Seven', 'Nine'];
    unselectedItems.forEach(item => selectablePage.isItemNotSelected(item));
  });
});
