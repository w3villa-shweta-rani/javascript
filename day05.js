const firstName = "shweta ";
const lastName = "rani";
const name = firstName+lastName;
console.log(name);
// try catch 

try {
  let data = JSON.parse('{"name": "Shweta"}'); // valid JSON
  console.log(data.name);
} catch (error) {
  console.error("Invalid JSON:", error.message);
}

try {
  let data = JSON.parse("Invalid JSON"); // invalid JSON
} catch (error) {
  console.error("Caught an error:", error.message);
}

// Try catch block 

try{
  //code that might throwm an error
} catch (err){
  //code that runs if an error occurs
}

try {
  let json = '{"name":"shweta"}';
  let user = JSON.parse(json);
  console.log(user.name);

} catch(err){
  console.log("something went wrong:", err.message)
}

try{
  let json = "{name:'shweta'}";
  let user = JSON.parse(json);
  console.log(user.name);

}catch(err){
  console.log("something went wrong:", err.message);
}

//create own errors using throw keyword
function checkNumber(num) {
  if(typeof num !== "number") {
    throw new Error("Input must be a number")
  }
  console.log("valid number", num)
}
try {
  checkNumber("hello");
} catch (err){
  console.log("Error:", err.message);

}

//event listener
const btn = Document.getElementById("myBtn");

  btn.addEventListener("click", function() {
    alert("Button was clicked!");
  });
