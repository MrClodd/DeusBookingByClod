describe('Create steps for a search in booking', () => {
  it('click on the different steps of the web page', () => {
    cy.visit('https://www.booking.com')
    cy.wait(2000)
    cy.get('#onetrust-accept-btn-handler').click()
//Activate this step only if you don`t click on the Where are you going box//       cy.get('#ss').click()
    cy.wait(2000)
    cy.get('#ss').type('Porto')
    cy.get('.sb-searchbox__button').click()
    cy.get('[data-date="2022-12-01"]').click()
    cy.get('[data-testid="date-display-field-end"]').click()
//Activete this step only when pop-ups GENIUS appears//                             cy.get('#ss').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .aadb8ed6d3 > tbody > :nth-child(2) > :nth-child(6) > .b21c1c6c83').click()
  })
})