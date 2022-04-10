
import { githubLoginUrl } from "../support/authentication.constant"

export class Github{

    verifySignInUrl(){
        cy.contains('Sign in').click()
        cy.url().should('eq',githubLoginUrl)
    }

    navigateToMainPage(){
        cy.go('back')
        
    }
}

export const githubPage = new Github()





