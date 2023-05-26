import Url from "../support/URL";
import searchPage from "../page/SearchPage";

let url = new Url();
let SearchPage = new searchPage();

//testdata
let items = ["free fire", "steam", "mobile legend"];

describe("Search feature", () => {
  beforeEach(() => {
    cy.visit(url.appvcgamers);
  });

  it("Search some items", () => {
    cy.wait(5000);

    items.forEach((item) => {
      SearchPage.frmSearch().should("not.be.disabled").clear();
      SearchPage.frmSearch().type(`${item}` + "{enter}");

      //assert
      cy.xpath(`//p[contains(text(), "${item}")]`).should(
        "have.length.greaterThan",
        1
      );
      cy.wait(3000);
    });
  });
});
