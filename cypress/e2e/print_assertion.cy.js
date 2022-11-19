describe('booking test', () => {
  it('passes', () => {
    cy.visit('https://www.booking.com')
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
    cy.wait(2000)
    cy.contains('Porto: 3,302 properties found').click()

//Verify the Check-in date on the left is the 1st of next month
    cy.get('[data-testid="date-display-field-start"]')
      assert.equal(2022-12-01, '1st of next month Equal')
      assert.strictEqual(2022-12-01, '1st of next month strictly Equal')


//Verify the Check-out date on the left is the 7th of next month
      cy.get('[data-testid="date-display-field-end"]').click()
        assert.equal(2023-01-07 '1st of next month Equal')
        assert.strictEqual(2023-01-07, '1st of next month strictly Equal')
  })
})