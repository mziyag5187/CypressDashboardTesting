import { modelSURL } from "../support/authentication.constant";
var data = require('../fixtures/modelsPage.json')

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

}

export const onModelSPage = new ModelS;







