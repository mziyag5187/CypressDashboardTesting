

let tools = ['selenium','cypress','wdio','uft','protractor']

const string = tools.toString();

console.log(string);

const join = tools.join(' * ')
console.log(join);

const pop = tools.pop()
console.log(tools);

const push = tools.push('webshare')
console.log(tools);

const shift = tools.shift()
console.log(tools);

const unshift = tools.unshift("sleenium")
console.log(tools);

const sort = tools.sort()
console.log(tools);

const reverse = tools.reverse()
console.log(tools);


tools.forEach( (value) => {

    if (value == "cypress"){
        console.log("cypress is found");
    }else{
        console.log("Element is not found");
    }
})




