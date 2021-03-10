/// <reference types="cypress"/>

describe('Trabalhando com Popup..', () => {

    it('Deve testar popup diretemente..', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })

    it.only('Deve verificar se o popup invocado', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })

        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })

describe('Trabalhando com Links', () => {
    
    it.only('Check popup url', () => {
        cy.contains('Popup2')
        .should('have.prop', 'href')
        .and('equal', 'https://wcaquino.me/cypress/frame.html')
        })
    })
})