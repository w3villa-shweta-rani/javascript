function greet(name, callback){
    console.log("hello," + name);
    callback();
}

function sayBye(){
    console.log("Goodbye");
}

greet("shweta", sayBye)

//setTimeout

setTimeout(() => {
    console.log("Executed after 5 seconds");
}, 5000);

//create a function that logs a message after 5 econds
function delayedMessage (){
    setTimeout(() => {
        console.log("Executed after 5 seconds")
    },5000)
}
delayedMessage();

function addition (a, b){
    console.log(a + b);
    setTimeout(() => {
        console.log ("your addition operation is successfully executed")
    },2000)
}
addition (2, 3);

//setinterval

let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log("running...." + count);
    if(count === 5) clearInterval(intervalId);
},3000);

//promises (A promise represents a value that will be available now, leter, or never)


let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Data loaded!");
    } else {
      reject("Error loading data!");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log(" Error:", error);
  })
  .finally(() => {
    console.log(" Operation complete");
  });


const promise = new Promise((resolve, reject) =>{
    let success = true;
    if(success) resolve("promise resolved!");
    else reject("promise rejected");
});
promise
.then((message) => console.log(message))   //when resolved
.catch((error) => console.log(error))      //when rejected
.finally(() => console.log("Done"))        //always runs

// Destructuring (extract values from object and array easily object destructuring)

const user = {
    name:"john",
    age:22
};
const {name, age} = user;
console.log(name);
console.log(age);

//Array destructuring
const colors = ["red", "green", "yellow", "brown", "blue"]
const [first, second, third, fourth, fifth] = colors;
console.log(first, second, third, fourth, fifth);