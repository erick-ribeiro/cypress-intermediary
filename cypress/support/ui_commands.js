// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'), 
    password = Cypress.env('user_password')
    ) => {
    cy.visit('/')
    cy.url().should('include', '/users/sign_in')
    
    cy.get('[data-qa-selector="login_field"]')
        .type(user, {delay: 0})
        .should('have.value', user)
    cy.get('[data-qa-selector="password_field"]')
        .type(password, {log: false, delay: 0})
        .should('have.value', password, {log: false})

    cy.get('[data-qa-selector="sign_in_button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-qa-selector="user_menu"]').click()
    cy.get('[data-qa-selector="sign_out_link"]').click()
    
    cy.url().should('include', '/users/sign_in')
})

Cypress.Commands.add('createProject', (projectName, projectDescription) => {
    cy.get('#project_name').type(projectName).should('have.value', projectName)
    cy.get('#project_description').type(projectDescription).should('have.value', projectDescription)
    // cy.contains('Create project').click()
})

