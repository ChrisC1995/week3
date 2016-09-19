var firstName = "Christian";
var middleName = "Reid";
var lastName = "Campbell";
var fullname = firstName + " "+ middleName + " " + lastName; //combines all previous names into full name

console.log(fullname); //puts it in one line 
// or (firstName, middleName, lastName)


//gold
var reversed = fullname
.split("") //split it out of an array
.reverse() // reverse the text
.join(""); // joins the array back together
console.log (reversed);