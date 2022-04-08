/// <reference types="cypress" />

import {teslaURL} from '../../support/authentication.constant'
import { onModelSPage } from '../../support/models'

describe('tesla.com automation testing', ()=>{

    beforeEach('Navigate to page to tesla.com', ()=>{
        cy.visit(teslaURL)
    })

    it('Test-1',()=>{

        onModelSPage.urlVerification()
        onModelSPage.privacy_Verification()

    })





})













