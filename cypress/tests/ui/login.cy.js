describe('Login no GITLAB', () => {
	it('Logou com Sucesso', () => {
	cy.login()
	cy.url().should('include', '/')
	})
})