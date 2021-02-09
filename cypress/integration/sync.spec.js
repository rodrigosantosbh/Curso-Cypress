/// <reference types="cypress"/>

describe('Esperas...', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar o elemento estar disponivel..', () => {
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona')
    })

    it('Uso do find..', () => {
        cy.get('#buttonList')
            .click()

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Uso do Timeout', () => {
        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .should('exist')

        cy.get('#buttonListDOM')
            .click()
        cy.wait(5000)
        cy.get('#lista li span')
            .should('contain', 'Item 2')

        cy.get('#buttonListDOM')
            .click()
        cy.get('#lista li span')
            .should('have.length', 1)

        //cy.get('#novoCampo', {timeout: 1000})
        //    .should('exist')
    })

    it('Click Retry', () => {
        cy.get('#buttonCount')
        .click()
        .should('have.value', '11')
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM')
            .click()
        cy.get('#lista li span').then($el => {
            expect($el).to.have.length(1)
        }).and('have.id', 'buttonListDOM')
    })
})