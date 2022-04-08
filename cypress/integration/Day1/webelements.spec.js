/// <reference types="cypress" />

describe('Webelements', ()=>{


    //Tag Name
    cy.get('input')

    //by ID
    cy.get('#radio1')
    cy.get('input #radio1') // to specify the attributes of the element, needs "one space"

    //by class-name
    cy.get('.iCheck-helper')

    //by attribute-name
    cy.get('[type]')

    //by attribute name and value
    cy.get('[name="abuse"]')

    //by class value
    cy.get('[class="iCheck-helper"]')

    //by tagName and attribute with value
    cy.get('input [name="abuse"]')
    cy.get('input [name="abuse"]').eq(0) // to be able to choose from multiple webelements
    

    //by two different attributes or more
    cy.get('[name="abuse"][class="iCheck-helper"]') // without any space beteen the attributes

    //using text of the weblement while locating
    cy.get(loc).contains('Blue')







})