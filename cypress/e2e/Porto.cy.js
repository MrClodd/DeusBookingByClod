describe('click in type your destination', () => {
  it('passes', () => {
    cy.visit('https://www.booking.com')
    cy.get('#ss').type('Porto')
  })
})