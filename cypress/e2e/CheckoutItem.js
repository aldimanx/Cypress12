import randomizer from "../support/randomizer";
import Url from "../support/URL";
import cartPage from "../page/CartPage";

let url = new Url();
let rand = new randomizer();
let CartPage = new cartPage();
let number = rand.makeNumberUnderMax(97);

//testdata
let username = "noverio_rio@yahoo.com";
let password = "test123";
let metode = "BCA Virtual Account";

describe("checkout feature", () => {
  beforeEach(() => {
    cy.visit(url.homepage);
    cy.loginSVG(username, password);
  });

  it("checkout buy now random item", () => {
    cy.get(".lp-product").eq(number).click();
    CartPage.btnBeliLangsung().click();
    CartPage.btnNoteText().click();
    CartPage.frmNotes().type("test123");
    CartPage.btnSimpanPerubahan().click();
    CartPage.btnMetodePembayaran().click();
    CartPage.btnPilihMetode(metode).click();
    CartPage.btnBayar().click();
    CartPage.btnLanjutkan().click();
  });
});
