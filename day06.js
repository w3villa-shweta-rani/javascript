// control structure is used to control the flow of the code

// if code is true than code will run only
let num = 20;
if (num > 18 ){
    console.log("you are eligible for voting")
}

//if else (if condition is not satisfied than will run)
let age = 22;
if ( age > 18){
    console.log("congrats, you are eligible for voting")
}
else {
    console.log("you are not eligible for voting")
}

//if....elseif....else
const number = 0;
if (number > 0 ){
    console.log("number is positive");
    
}
else if(number == 0){
    console.log("number is equal")
}
else {
    console.log("number is negative")
}

//switch when a variable has multiple values 

const day = 3;

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("tuesday") 
        break; 
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")  
        break; 
    case 5:
        console.log("Friday") 
        break;   
    case 6:
        console.log("saturday")   
        break;
    case 7:
        console.log("sunday") 
        break;
    default:
        console.log("Invalid day");        
}
//Looping

//for loop
for(let i=1; i<=4; i++){
    console.log(i);
}

//while loop
let i = 2;
while(i <= 6){
    console.log(i);
    i++;
}
// do while loop
let j =1;
do{
    console.log("hello")
    i++;
}while (i <= 3);

// for of loop (Array yaa string py iterate krny k liye)
let fruits = ["apple","bnana","mango"];
for(let fruit of fruits){
    console.log(fruit);
}

//file the n fruit is present or not in fruits array
for(let fruit of fruits){
    if(fruit == "apple"){
        console.log(`${fruit} is available in our cart`)
    }
}

// for each loop(sirf array py use hota hai)
let nums = [1,2,3,4,5,6,7,8,9];
nums.forEach(function(n){
    console.log(n);
});

//Functions in javascript
function add (a,b){
    return a + b;
}
console.log(add(5,3));

const addition = (a,b) => {

}

// Function Expression in javascript
const multiply = function(x, y){
    return x * y;
    
}
console.log(multiply(3, 4));

//Arrow FunctionFunction
const add1 = (a, b) =>  a + b;
console.log(add1(3, 3));

//Parameters and return
function greet(name) {
    return "Hello, "+ name;
}
console.log(greet("shweta"));

//scope (global scope and local scope)
//global scope: functionk bahar declared variable
//Local variable: function k andar declared variable

let x = 10;
function test() {
    let y = 5;
    console.log(x + y);
    
}
test();

// closure
function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;

}
const counter = outer();
counter();
counter();

//event object
document.addEventListener("click",function(event){
    
})