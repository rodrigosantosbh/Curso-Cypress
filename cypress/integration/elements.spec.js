/// <reference types="cypress"/>

describe('Trabalhando com elementos basicos', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Texto', () => {
        //cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Link', () => {
        //cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        //cy.reload()
        cy.get('#resultado').should('not.have.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('Campo de texto', () => {
        cy.get('#formNome').type('Rodrigo Santos')
        cy.get('#formNome').should('have.value', 'Rodrigo Santos')

        cy.get('#elementosForm\\:sugestoes')
            .type('Campo textarea preenchido')
            .should('have.value', 'Campo textarea preenchido')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}Acerto', {delay:200})
            .should('have.value', 'Acerto')
    })

    it('Radio button', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]')
            .click({multiple: true})
    })

    it('Combobox', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')
            //TODO validar as opçoes do comobo
    })

    it.only('Combobox multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])
            //TODO validar as opçoes selecionadas do combo
    })
})