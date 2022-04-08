var name = "Ibrahim"
var age = 28
var name_objects = {firstName : "Ibrahim", lastName : "Altay"}
var truth = true
var sheets = ["HTML","CSS"]
var a = null 


var students = {
    firstName : "Ibrahim",
    lastName : "Altay",
    age:28,
    height : 180,

    fullName : function(){
        return this.firstName +" "+ this.lastName;
    }
}

const ageValue = students.age;

console.log(ageValue);
console.log(students.fullName());












