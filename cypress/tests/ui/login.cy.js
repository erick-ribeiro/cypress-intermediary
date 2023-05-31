describe('Login no GITLAB', () => {
  it('Login', () => {
    const password = Cypress.env('user_password')

    cy.visit('/')
    cy.url().should('include', '/users/sign_in')

    cy.get('[data-qa-selector="login_field"]')
      .type('root', {delay: 0})
      .should('have.value', 'root')
    cy.get('[data-qa-selector="password_field"]')
      .type(password, {log: false, delay: 0})
      .should('have.value', password, {log: false})

    cy.get('[data-qa-selector="sign_in_button"]').click()
    cy.get('[data-qa-selector="welcome_title_content"]').should('be.visible')

  })
})