describe("Demoqa", () => {
    context("Text Box tests", () => {
      beforeEach(() => {
        cy.visit("https://demoqa.com/text-box");
      });
  
      it("should fill and submit the text box form", () => {
        cy.get("#userName").type("John Smith");
        cy.get("#userEmail").type("xxx@yyy.zz");
        cy.get("#currentAddress").type("Current Address");
        cy.get("#permanentAddress").type("Permanent Address");
        cy.get("#submit").click();
  
        // Verify the output
        cy.get("#name").should("have.text", "Name:John Smith");
        cy.get("#email").should("have.text", "Email:xxx@yyy.zz");
        cy.get("#currentAddress.mb-1").should(
          "have.text",
          "Current Address :Current Address"
        );
        cy.get("#permanentAddress.mb-1").should(
          "have.text",
          "Permanent Address :Permanent Address"  // Fixed typo "Permananet" → "Permanent"
        );
      });
    });
  });