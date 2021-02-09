/// <reference types="cypress"/>

import { resolve } from "cypress/types/bluebird"

describe('Helpers...', () => {

    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.get('#formNome').then($el => {
            //cy.wrap($el).type('Funciona via cypress')
            //$el.type('Funciona???')

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })
    })
})
