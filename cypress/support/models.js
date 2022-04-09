import { comparePageURL, modelSURL } from "../support/authentication.constant";
var data = require('../fixtures/modelsPage.json')
var dataComparePageTexts = require('../fixtures/comparePage.json') 

export class ModelS{

    urlVerification(){
        cy.wait(1000)
        cy.get('.tds-align--center > :nth-child(1) > .tds-site-nav-item > .tds-site-nav-item-text').click()
        cy.wait(1000)
        cy.url().should('eq', modelSURL)
    }

    privacy_Verification(){
        cy.scrollTo('bottomLeft')

        cy.get('[class="tds-link tcl-link"]').each(($el,index)=>{
            
            const text = $el.text()
            expect(text).to.contain(data.ModelS[index])

        })
    }

    modelScomparePage(){
        cy.contains('Compare').click()
        cy.url().should('eq',comparePageURL)
        cy.scrollTo('bottomLeft')

        cy.get('[class="tds-text--caption tcl-compare-models__item-title"]').each( ($el,index)=>{

            const text = $el.text()
            expect(text).to.contain(dataComparePageTexts[index])
            
        })
     


    }


}

export const onModelSPage = new ModelS;







