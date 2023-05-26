import randomizer from "../support/randomizer";
import Url from "../support/URL";
import loginPage from "../page/LoginPage";

let url = new Url();
let PageLogin = new loginPage();
let rand = new randomizer();

let randomID = rand.makeid(8);

//testdata
let username = "noverio_rio@yahoo.com";
let password = "test123";

describe("login feature", () => {
  beforeEach(() => {
    cy.visit(url.appvcgamers);
  });

  it("login with vaild account", () => {
    PageLogin.btnLogin().should("be.visible").click();
    PageLogin.frmEmail().type(username);
    PageLogin.frmPassword().type(password);
    PageLogin.btnMasuk().click();
    PageLogin.btnProfile().should("be.visible").click({ force: true });

    //assert username exist
    let usernameAssert = username.split("@")[0];
    cy.xpath(`//p[contains(text(), ${usernameAssert})]`).should("be.visible");
  });

  it("login with invaild account", () => {
    PageLogin.btnLogin().should("be.visible").click();
    PageLogin.frmEmail().type(randomID + "@gmail.com");
    PageLogin.frmPassword().type(password);
    PageLogin.btnMasuk().click();

    //assert notif email/ password salah
    cy.xpath('//p[text()="Email atau password anda salah."]').should("exist");
  });
});
