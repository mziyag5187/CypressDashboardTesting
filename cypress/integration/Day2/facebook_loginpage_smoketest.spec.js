/// <reference types="cypress" />


describe('Login Page Smoke Test',()=>{

    it('Positive Testing - valid credentials', ()=>{
        cy.Positive_Testing()
    })

    it('Negative Testing - wrong password', ()=>{

        cy.Negative_Password_Testing()
    })

    it('Negative Testing - wrong username', ()=>{

        cy.Negative_Username_Testing()
    })

    it('Negative Testing - wrong username and password', ()=>{

        cy.Negative_Username_Password_Testing()

    })

})









