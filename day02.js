console.log("External javascript file connected success")
var name= "john"
let age = 22;
const country = "india";

// let declare it with let variable
let city ="Noida"
let area = 3333453;
let cost = 67.98;
let exsist = true;

console.log(typeof city, typeof area, typeof cost, typeof exsist);

// created a object and and print the a single value from it

let person = {
    name:"shweta",
    age:23,
    city:"Noida"
};
console.log (person.name);

// Created a array and print a single object
let cities = ["delhi", "Noida", "banglore", "Haydrabad", "Manglore"];
console.log(cities[2])

// Type conversion

let num = number("erica");
let names = String(23);
console.log(typeof(num), typeof(names))

// if, else if, else
let x =0;
if(x>0){
    console.log("positive")
}
else if (x<0){
    console.log("negative")
}
else{
    console.log("equal to zero")
}
    
//switch case
let day = 7;
switch (day) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("Tuesday")
        break;   
    case 3:
        console.log('wednesday') 
        break;  
    default:
        console.log("invalid number")      

}

// for loop ()
for(let i=1; i<=10; i++){
    console.log(i)

}
 
//for of loop (to iterate each and every value of loop)
colors = ["red", "white", "pink", "blue", "brown"]
for(let color of colors){
    console.log(color);
}

//while loop (runs while condition is true)
let j = 1;
while(j<=9){
    console.log(j);
    j++;
}

//do while loop
let k = 1;
do{
    console.log(k);
    k++;
}
while ( k<=10);

//forEach loop

let numbers = [1,2,3,4,5,6];
numbers.forEach(function(num){
    console.log(num);
})

//for loop usecase
vegetables = ["potato", "onion", 'brinjles']
for(let vege of vegetables){
    console.log(vege);
}