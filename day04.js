console.log(names);
var names = "erica";

elements = ["desk","books","copies","bottles","pen","bottle"]
for(element of elements){
    console.log(element)
}

const multiply = function(a,b)
{
    console.log(a*b);
}
multiply(2,3)

const addition = (a,b) => a+b;
console.log(addition(3,4));

//parameter and return value
function greet(name) {
  return `Hello, ${name}!`; 
}

//local scope
console.log(greet("Shweta")); 

function test(){
    let localvar = 10;
    console.log(localvar);
}
test();
// console.log(localvar)

//global scope
let globalvar = 20;
function show(){
    console.log(globalvar)
}
show();
console.log(globalvar);

//array in javascript
let numbers = [3,5,4,1,45,65,34,89,70,88]
numbers.push(89)
numbers.pop()
numbers.shift();
numbers.unshift(0);
console.log(numbers)
const squared = numbers.map(num => num*num)
console.log(squared)
const evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumber)

// javascript string
let text = "alice";
console.log(text.slice(0,2))
console.log(text.substring(-2,2))
console.log(text.replace("alice","shweta"))
console.log(text.split())
console.log(text.toUpperCase())
console.log(text.toLowerCase())

//Template Litterals
let name1 = "shweta";
let age2 = 23;
console.log(`my name is ${name1} and i am ${age2} years old`);

//exercise Extract a substring from full name

let fullName = "shweta rani";
let firstName = fullName.slice(0,6);
console.log(firstName);

//replace a work in a sentence
let sentence = 'javascript is the programming language';
let newSentence = sentence.replace("javascript", "python");
console.log(newSentence)

//using temperal literals
let user = "shweta";
console.log(`hello ${user}, welome to the js world`)

//object creation
let product = {
    mobile:'Samsung galaxy',
    generation:17,
    ram:12,
    rom:256,
    camera:50
}
//dot notation
console.log(product.mobile);
console.log(product.generation);

//bracket notation
console.log(product["rom"])

//add a element to the object
product.isLaunched = true;
console.log(product)

//modify the element in the object 
product.generation = 19;
console.log(product)

//delete a element in the object
delete product.ram;
console.log(product);


let student = {
    name:"shweta",
    age:23,
    grade:'A'
}

student.ispased=true;
console.log(student)
