Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

Cypress.Commands.add("loginSVG", (username, password) => {
  cy.xpath('//a[text()="Masuk / Daftar"]').should("be.visible").click();
  cy.get('input[placeholder="Email"]').type(username);
  cy.get('input[placeholder="Password"]').type(password);
  cy.xpath(
    '//button[@class="btn-submit py-3 w-full mt-7 text-center font-semibold text-sm"]'
  ).click();
});
