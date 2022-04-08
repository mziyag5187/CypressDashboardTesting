/// <reference types="cypress" />

describe('Checkboxes Testing', ()=>{

    it('Chechbox Testing', ()=>{

        cy.visit('http://practice.cybertekschool.com/checkboxes')
        
        cy.get('#box1').check().should('be.checked')
        
        //cy.viewport('iphone-xr')
        //cy.get('#box2').check().should('not.be.checked')


        cy.wait(1000)
        cy.get('[name="checkbox2"]').click().should('not.be.checked')

    })

    it('Chechbox Testing - ipad-mini', ()=>{

        cy.visit('http://practice.cybertekschool.com/checkboxes')
        
        cy.get('#box1').check().should('be.checked')
        
        cy.viewport('ipad-mini')
        //cy.get('#box2').check().should('not.be.checked')


        cy.wait(1000)
        cy.get('[name="checkbox2"]').click().should('not.be.checked')

    })



})