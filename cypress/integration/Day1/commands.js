<reference types="cypress" />

//visit
cy.visit('open url') 
cy.visit('url',{timeout : 1000})

//should is promise
let path = 'https.//ww.google.com'
cy.url().should('include', path)


//finding the webelement
cy.get('#spoof-warning').click() 
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')

//negative ones
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')



cy.get('h1').should('have.length',3)
cy.get('h1').should('have.text','blabalbal')
cy.get('h1').should('have.value','cypress')

//parent to child
cy.get(locator).first()
cy.get(locator).last()
cy.get(locator).eq(1).click() // action based on the index of that element


cy.go('back') //navigate back

cy.get(loc).next.click()
cy.get('tbody tr').nextAll.click({multiple:true}) // to click each of the 10 rows one by one

cy.get(loc).prev.click()
cy.get(loc).prevAll.click({multiple:true});

//position handling
cy.get(loc).click('top')
cy.get(loc).click('buttom')
cy.get(loc).click('topLeft')

//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click() // to click on-over-up-down ont any button

cy.get('#username').clear().type('username') // before entering, better to use clear()




















