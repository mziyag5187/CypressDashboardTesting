/// <reference types="cypress" />

import {teslaURL, modelSURL, comparePageURL} from '../../support/authentication.constant'
import { onModelSPage } from '../../support/models'

describe('tesla.com automation testing', ()=>{

    beforeEach('Navigate to page to tesla.com', ()=>{
        cy.visit(teslaURL)
    })

    it('Test-1',()=>{

        onModelSPage.urlVerification()
        onModelSPage.privacy_Verification()
        onModelSPage.modelScomparePage()


    })

})

//TASK::

//navigate to page https://www.tesla.com/models
//click on the compare button at the end of the page
//check every single text on the page











