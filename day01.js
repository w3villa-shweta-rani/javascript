console.log("javascript loaded");
// declearation 
console.log(z);
let m = 10
// alert("welcome to javascript");

let x = 5;
a();
b();

console.log(x);
function a (){
    let x=10;
    console.log(x)
}

function b (){
    let x=100;
    console.log(x)
}

function c (){
    const x = 76;
    console.log(x)
}
c()

// the scope chain 

function a() {
    const b=10;
    c();
    function c(){
        console.log(b)

    }
}
a();

// console.log(b);
document.getElementById("tittle").style.color = "blue";

console.log("helle javaScript");
 