/// <reference types="cypress" />


var data = require ('../../fixtures/states.json')

describe('Dropdown Testing',()=>{

    it('State Selection',()=>{

        cy.visit('http://practice.cybertekschool.com/dropdown')

        cy.get('#state > option').each( ($el,index)=>{

            const text = $el.text()

            expect(text).to.contain(data.states[index])

            cy.get('#state').select($el.text()).should('be.visible')

        })

    })

})

// TASK
// navigate to http://practice.cybertekschool.com/dropdown
// select you birthday by yyyy/mm/dd


describe('Practice Task', ()=>{

    it('Select My Birthday', ()=>{

        cy.visit('http://practice.cybertekschool.com/dropdown')

        cy.get('[id="year"]').select('1987').should('be.visible')
        cy.get('[id="month"]').select('September').should('be.visible')
        cy.wait(2000)
        cy.get('[id="year"]').select('19').should('be.visible')

    })
})




