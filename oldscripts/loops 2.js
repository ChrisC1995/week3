//keeps things going as long as the condition is not met.
// for loops and for each loops are most common, while loop( will execute as long as code is true), do while loop. (will run through at least once.)
//while
var count = 3;
while (count<=5) { //write while, go down to the empty box icon, it writes the code base)
    console.log (count);
    count++; // ++ means + 1, as long as count is below 5, the loop will execute
}// while count is less than or equal to 5, execute the ++ counter, while loop.


//array

var names = ["Bob","Steve","Janine","Linus"]; //array, a collection of values
    console.log("Number of Items: " + names.length); //.length displays the length of the array
    console.log(names[2]); //inxder to grab one name out of array . indexers start at 0. It will grab Janine.
//for each loop 
 for(var n in names) { //sets var n to hold all values in the names array
     console.log(names[n]);
 }

 for(var n in names){ // for n in all of the names, also if the name starts with B, print name
     if (names[n][0] == "B"){ //^ for each item in names array, create a variable name position and get the first item in name
         console.log("Name 0 starts with B:" + names[n]);}
    else if (names[n][0] == "S"){
         console.log("Name 1 starts with S:" + names[n]);} // if name[0] (letter value) is equal to "S" print first letter of name 
    else if (names[n][0] == "J"){
         console.log("Name 2 starts with J:" + names[n]);}
    else if (names[n][0] == "L"){
         console.log("Name 3 starts with L:" + names[n]);}
 }
 for( var n in names){
     console.log(names[n]); //for each name in array, print names
 }

 //for loops
 console.log("\n\n\n\n"); //\n new line
 for (var i=0; i <= 100; i = i+2){ // for( variable, condition, action) {do stuff}
    console.log(i); // perfect to do things a set number of times. 
 }
//do while loops
/*do {
    
} while (condition);*/
