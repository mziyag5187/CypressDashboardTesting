/// <reference types="cypress" />
var data = require('../../fixtures/etsy.json')
var etsy = require('../../fixtures/etsy.careers.json')

describe('Etsy Test Cases', () => {

    beforeEach('Navigate to the page etsy.com', () => {
        cy.wait(1000)
        cy.visit("https://www.etsy.com/")
    })

    it('Login to Etsy', () => {
        //Verify all the top menu titles one by one
        cy.get('[class="top-nav-item wt-pb-xs-2 wt-mr-xs-2 wt-display-flex-xs wt-align-items-center"]').each(($el, index) => {
            const text = $el.text().trim()
            expect(text).to.contain(data.etsy[index])
        })

    })

    it('Navigate to the Home Favorites page', () => {
        //url verfication
        cy.get('[aria-labelledby="ge-tooltip-label-favorites"]').click()
        cy.url().should('eq', 'https://www.etsy.com/guest/favorites?ref=hdr-fav')
        //scrool the page to the buttom
        cy.scrollTo('bottomLeft')
        //Verify Help center is visible on the page
        cy.contains('Help Center').should('be.visible')
    })

    it.only('Navigate to the Help Center page',()=>{
        cy.contains('Careers').click()
        cy.url().should('include','careers')

        cy.get('#keywordSearch').type('Engineering')
        
        cy.get('#locationInput').type('Br')
        cy.wait(1000)
        cy.get('.phs-jobs-category').click()

        cy.get('[type="submit"]').click()

        cy.get('div ul li span a div span').each( ($el,index) =>{

            const text = $el.text()
            expect(text).to.eq(etsy.careerResults[index])

        })


       










    })

})



