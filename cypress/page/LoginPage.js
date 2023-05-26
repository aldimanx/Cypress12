class loginPage {
  btnLogin() {
    return cy.xpath('//a[text()="Masuk / Daftar"]');
  }
  frmEmail() {
    return cy.get('input[placeholder="Email"]');
  }
  frmPassword() {
    return cy.get('input[placeholder="Password"]');
  }
  btnMasuk() {
    return cy.xpath(
      '//button[@class="btn-submit py-3 w-full mt-7 text-center font-semibold text-sm"]'
    );
  }
  btnProfile() {
    return cy.xpath('(//div[@class="user-avatar-progress"])[2]');
  }
}

export default loginPage;
