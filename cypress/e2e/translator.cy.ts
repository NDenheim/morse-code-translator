describe("Translator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should have a heading with correct text", () => {
    const heading = cy.get("h1");

    heading.should("contain", "Morse Code Translator");
  });

  it("should convert letters to Morse Code"),
    () => {
      cy.get("#english__input").should("have.text", "h");
    };
  if (true) {
    cy.get("#morse__output").should("have.text", "....");
  }

  it("should convert words to Morse Code"),
    () => {
      cy.get("#english__input").should("have.text", "hi");
    };
  if (true) {
    cy.get("#morse__output").should("have.text", ".... ..");
  }

  it("should convert words to Morse Code regardless of its case"),
    () => {
      cy.get("#english__input").should("have.text", "HI");
    };
  if (true) {
    cy.get("#morse__output").should("have.text", ".... ..");
  }
});
