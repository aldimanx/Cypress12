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

describe("Add to cart feature", () => {
  beforeEach(() => {
    cy.visit(url.appvcgamers);
    cy.loginSVG(username, password);
  });

  it("Add to cart 1 random items", () => {
    cy.wait(5000);

    //weird url from main menu if select item from there
    cy.visit(
      "https://app.vcgamers.com/dagangan/mobile-legends-257-diamonds-58000-vsgaming/94173"
    );
    cy.url().then((url) => {
      let slicedText = url.split(".com")[1];
      CartPage.btnAddCart().click();
      CartPage.btnLihatKeranjang().click();

      //assert get a correct valid url product
      cy.xpath(`//a[@href="${slicedText}"]`).should("exist");

      //clear cart
      cy.xpath('(//img[@alt="trash"])[1]').click();
      cy.xpath('//button[contains(text(),"Yakin")]').click();
    });
  });
});
