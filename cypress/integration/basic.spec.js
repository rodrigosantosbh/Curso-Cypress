/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it('Deve visitar a pagina e comparar o titulo..', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        cy.pause()
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        //TODO impirmir o log no console
        //TODO escrever o log em um campo de teste

    })

    it('Deve procurar e interagir com o elemento..', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    
    })
})