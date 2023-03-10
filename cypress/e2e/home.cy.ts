describe('Home Page', () => {
  it('passes', () => {
    cy.visit('/')
    cy.findByText('Vite + Vue').should('exist')
  })
})
