/// <reference types="cypress"/>

import {URL} from '../../support/authentication'
import {CNA} from '../../support/CNA'

describe('Radio Button Tests', () => {

    beforeEach('Opening the URL',()=>{
        cy.visit(URL)
    })

    it('Verify all the radio buttons are checked', () => {

        cy.get('[type="radio"]').then( radiobuttons => {

            for(var i=0; i<=radiobuttons.length-1; i++){
                cy.wrap(radiobuttons).eq(i)
                .check({force:true})
                .should('be.visible')
                cy.wait(500)
                console.log(i);

            }
        })


    })

})


describe('Radio Buttons Test, by improting the functions from another class', ()=>{

    it('Verify the first check box is visible after checked', ()=> {

        CNA.function2();



    })





})