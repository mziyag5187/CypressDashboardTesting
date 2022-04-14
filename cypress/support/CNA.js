export class functions{

    function1(){
        cy.get('[type="radio"]').then( radiobuttons => {

            for(var i=0; i<=radiobuttons.length-1; i++){
                cy.wrap(radiobuttons).eq(i) // to use the index for multiple web elements
                .check({force:true})
                .should('be.visible')
                cy.wait(500)
                console.log(i);

            }
        })        
    }

    function2(){

        cy.get('[type="radio"]').then( radiobuttons =>{

            cy.wrap(radiobuttons).first()
            .check()
            .should('be.checked')


        })



    }


}


export const CNA = new functions;