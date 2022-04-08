

var data = require('../../fixtures')


if(data.Url.include('test')){
    cy.fixture('satging.json').then( (data)=>{
        data.username()
        data.url()
        data.password()

    })
}else if(data.Url.include('uat')){
    cy.fixture('uat.json').then( (data)=>{

    })
}else if(data.Url.include('prod')){
    cy.fixture('prod.json').then( (data)=>{
        
    })
}







