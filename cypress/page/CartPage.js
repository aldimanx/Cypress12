class cartPage {
  btnSelectCart() {
    return cy.get(".lp-product");
  }
  btnAddCart() {
    return cy.get(".add-cart > .button");
  }
  btnLihatKeranjang() {
    return cy.xpath('//a[contains(text(), "Lihat Keranjang")]');
  }
  btnBeliLangsung() {
    return cy.xpath('//button[contains(text(),"Beli Langsung")]');
  }
  btnNoteText() {
    return cy.xpath('//p[@class="note-text"]');
  }
  frmNotes() {
    return cy.get(".notes-input").first();
  }
  btnSimpanPerubahan() {
    return cy.xpath('//button[contains(text(),"Simpan Perubahan")]').first();
  }
  btnMetodePembayaran() {
    return cy.xpath('//p[contains(text(),"Pilih Metode Pembayaran")]');
  }
  btnPilihMetode(methods) {
    return cy.xpath(`//p[contains(text(),"${methods}")]`);
  }
  btnBayar() {
    return cy.get(".tab-box > .button");
  }
  btnLanjutkan() {
    return cy.xpath('(//button[contains(text(),"Lanjutkan")])[2]');
  }
}

export default cartPage;
