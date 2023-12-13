describe("Footer Component", () => {
  it("Displays the correct copyright year", () => {
    // Visit the page where the component is rendered
    cy.visit("http://localhost:4321/en/");

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Find the copyright span and assert its text
    cy.get("#copyright").should(
      "have.text",
      `Copyright digital arena ${currentYear}`
    );
  });

  it("Have visible logo", () => {
    cy.visit("http://localhost:4321/en/");
    cy.get("#logo").should("exist");
  });

  it("have paragraf-1", () => {
    cy.visit("http://localhost:4321/en/");
    cy.get('[data-cy="paragraf-footer"]').should("exist");
  });

  it("Checks LinkedIn link properties", () => {
    // Visit your page with the link
    cy.visit("http://localhost:4321/en/");

    // Assertion: Check if the LinkedIn link is present
    cy.get('a[data-cy="linkedin-link"]').should("exist");

    // Assertion: Check if the href attribute is correct
    cy.get('a[data-cy="linkedin-link"]').should(
      "have.attr",
      "href",
      "https://www.linkedin.com/company/digitalarenadoo"
    );

    // Assertion: Check if the link has the correct class
    cy.get('a[data-cy="linkedin-link"]').should(
      "have.class",
      "mr-6",
      "text-neutral-200"
    );

    // Assertion: Check if the SVG icon is present
    cy.get('a[data-cy="linkedin-link"] svg').should("exist");
  });

  it("Checks it/ict/ link properties", () => {
    // Visit your page with the link
    cy.visit("http://localhost:4321/en/");

    cy.get('a[data-cy="it-link"]').then((itLink) => {
      // Use itLink instead of it-link
      cy.request(itLink.prop("href")).its("status").should("eq", 200);
    });
    cy.get('a[data-cy="ict-link"]').then((ictLink) => {
      // Use itLink instead of it-link
      cy.request(ictLink.prop("href")).its("status").should("eq", 200);
    });
    cy.get('a[data-cy="it-energetics"]').then((energeticsLink) => {
      // Use itLink instead of it-link
      cy.request(energeticsLink.prop("href")).its("status").should("eq", 200);
    });
    cy.get('a[data-cy="it-iso"]').then((isoLink) => {
      // Use itLink instead of it-link
      cy.request(isoLink.prop("href")).its("status").should("eq", 200);
    });
  });

 it("uredi hr postoji", () => {
    cy.visit("http://localhost:4321/en/");
    cy.get('h6[data-cy="uredi-hr"]').should('exist')
    cy.get('[data-cy="uredi-zg"]').contains('Zagreb, XI Podbrežje 11a')
    cy.get('[data-cy="uredi-st"]').contains('Split, Put Pazdigrada 14')
    cy.get('[data-cy="uredi-im"]').contains('Št. Stjepana Radića 16, Imotski')
    cy.get('[data-cy="tel-hr"]').contains('+385 99 505 8114')
    cy.get('[data-cy="oib-hr"]').contains('OIB: 69476362249')
  })

  it("uredi bih postoji", () => {
    cy.visit("http://localhost:4321/en/");
    cy.get('h6[data-cy="uredi-bih"]').should('exist')
    cy.get('[data-cy="ured-lju"]').contains('Ljubuški, Šipovača 84')
    cy.get('[data-cy="uredi-cap"]').contains('Čapljina, Braće Radića bb')
      cy.get('[data-cy="tel-bih"]').contains('+387 63 011 333')
    cy.get('[data-cy="oib-bih"]').contains('JIB/OIB: 4272 4789 0000 1')
  })
  
});
