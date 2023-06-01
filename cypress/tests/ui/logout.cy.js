describe('Logout no GITLAB', () => {
    beforeEach(function() {
        cy.login()
    })
    it('Deslogou com Sucesso', () => {
        cy.logout()
        cy.url().should('include', '/users/sign_in')
    })
})