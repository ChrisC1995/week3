var firstName = "Chris"; //string//
var lastName ="Campbell";
var myAge = 21; //integer//
var myActualAge =21.1; //floating integer//

console.log(firstName);
console.log(lastName);
console.log(myAge);
console.log (myActualAge);

firstName = "John"
lastName = "Doe"

console.log(firstName);
console.log(lastName); //variable names are case sensitive// //you can replace variable// // = is asign// //== compares a quality//

//adding two numbers together// 
var sum = 2 + 2; //sum is 4//
sum = sum + 7; //add 7 to sum and I get 11//
console.log(sum);

// There are a couple types of comments. This is single line
/* single or multi-line comment */
 sum = sum + "chris";
 console.log(sum); // combines sum and "chris"

 var bankBalance = 100;
 var deposit = "10";
 console.log(bankBalance + deposit); // the whole this is the statement. the math part is the expression. Expression is evaluated.
 console.log(bankBalance + (deposit * 1));
 console.log(bankBalance + (firstName * 1)); //Nan = not a number. null= absense of any value whatsoever. undefinied

 var a = 15, b = 25; // you can chain vairable declation. 
 console.log(a);
 console.log(b);
 var sum1 = a+b;
 console.log(sum1);

b+= a; //same as b = b+a
console.log(b);
console.log (!(a==b)); //a not equal to b