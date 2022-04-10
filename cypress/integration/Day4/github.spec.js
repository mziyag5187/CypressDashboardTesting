/// <reference types="cypress" />

import {github} from '../../support/authentication.constant'
import { githubPage } from '../../support/github'

describe('Github Test Cases', ()=>{

    beforeEach('Navigate to the page github.com',()=>{
        cy.visit(github)
    })

    it('Login to Github',()=>{

        githubPage.verifySignInUrl()
    })

    it('Navigate to page back',()=>{
        githubPage.navigateToMainPage()

    })
})

