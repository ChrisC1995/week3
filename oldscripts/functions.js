//functions accept an imput, change it, and relay an output
//functions take a block of code, gives it a name. console.log() is a function. anything that has () is a function.
function writeHelloWorld() { //to declare a function
    console.log("Hello World");
}

writeHelloWorld(); //to call function

function writeMessage(message) { // message is in the parameter for the function 
    console.log(message);
}
writeMessage("Hey there, how are you today"); //string is placed in message

function sum(num1, num2) { // adds number, can have mulitple parameters. Parameters only exist in the function it is in, never outside and independant.
var result = num1 + num2;
return result; // returns result out of the function
}

var a = sum(10, 50); // a is set to result
console.log(a); 

console.log(sum(2, 2))
console.log(sum(90, 120)) //shorter was to show the function returned
console.log(sum(1000, 4))


function count(num1) { //function that counts to variable from 1
  for(var i=1; i <= num1; i++) { //nested for loop inside a function
 console.log(i);
}}
count(50);
count(num1 = 100);
count(num1 = 15);