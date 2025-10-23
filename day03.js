
function add(a, b) {
    return a + b;
}
console.log("Sum:", add(5, 10));


const subtract = function(a, b) {
    return a - b;
};
console.log("Subtract:", subtract(10, 5));


const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(5, 3));


function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}
const add5 = outerFunction(5);
console.log("Closure result:", add5(10)); 


let numbers = [1, 2, 3, 4, 5];


numbers.push(6);      
numbers.pop();        
numbers.shift();      
numbers.unshift(0);   
console.log("Array after operations:", numbers);


let doubled = numbers.map(num => num * 2);
console.log("Doubled array:", doubled);


let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);


let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of array:", sum);


numbers.forEach(num => console.log("forEach element:", num));
