import { faker } from '@faker-js/faker'

describe('Criação de Projetos no GITLAB', () => {
    beforeEach(function() {
        cy.login()
        cy.visit('/projects/new')
    })

    const project = {
        name: `project-${faker.internet.domainWord()}`,
        description: faker.random.words(5)
      }

    it('Criou o Projeto com Sucesso', () => {
        cy.createProject(project.name, project.description)
    })
})