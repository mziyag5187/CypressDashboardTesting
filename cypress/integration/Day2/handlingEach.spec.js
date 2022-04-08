/// <reference types="cypress" />

var data = require('../../fixtures/staging.json')

describe('Handling Each Tests', ()=>{

    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[name="txtUsername"]').clear().type('Admin')
        cy.get('#txtPassword').clear().type('admin123')
        cy.get('#btnLogin').click()
        
    })

    it('Testing each text',()=>{
        cy.get('.quickLinkText').each( ($el, index)=>{
            
            cy.log('element : ', $el.text());

            const text = $el.text()
            expect(text).to.contain(data.quickLaunch[index])
            

        })


    })




})





