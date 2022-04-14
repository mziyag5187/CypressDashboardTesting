/// <reference types="cypress"/>

import { wrap } from 'cypress/types/lodash'
import {URL} from '../../support/authentication'
import {CNA} from '../../support/CNA'

describe('Radio Button Tests', () => {

    beforeEach('Opening the URL',()=>{
        cy.visit(URL)
    })

    it('Verify all the radio buttons are checked', () => {

        cy.get('[type="radio"]').then( radiobuttons => {

            for(var i=0; i<=radiobuttons.length-1; i++){
                cy.wrap(radiobuttons).eq(i) // we need to use here wrap()
                .check({force:true}) // to tell the cypress exac radio button to deal with
                .should('be.visible')
                cy.wait(500)
                console.log(i);

            }
        })
    })


    it('Another practice on radio buttons', ()=>{
        cy.visit('http://practice.cybertekschool.com/radio_buttons')


        cy.get('[type="radio"]').then(radioButtons =>{
            cy.wrap(radioButtons).first()
            .check({force:true})
            .should('be.checked')

            cy.wrap(radioButtons).eq(1)
            .check({force:true})// better to use here force:true
            .should('be.checked')

            for(var i = 0;  i<=radioButtons.length-1; i++){
                cy.wrap(radioButtons).eq(i) // to use index number of the webelement
                .check({force:true})
                .should('be.checked')
            }

    })

})


describe('Radio Buttons Test, by improting the functions from another class', ()=>{

    it('Verify the first check box is visible after checked', ()=> {

        CNA.function2();



    })





})