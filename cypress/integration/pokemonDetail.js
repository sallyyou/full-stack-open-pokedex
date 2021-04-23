describe("PokemonDetail", function () {
  it("detail front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur").click();
    cy.contains("ivysaur");
    cy.contains("chlorophyll");
  });
});
