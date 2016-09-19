// booleans are true and false statements. If true, then this. If false, then this. 
//If, checked checkout, allow submit, else, you need to agre to terms before sumbitting.
// Example of if, else if, and else
var inchesOfSnow = 5;
if (inchesOfSnow >= 12) { 
    console.log("It's a snow day!");
} else if (inchesOfSnow >=4 && inchesOfSnow <= 12){
    console.log ("waiting to see if school might be canceled"); // second statement after if

}
else { console.log("Sorry, go to school"); // if, else statement    
}




//Switch Example
var dayOfWeek = "Sat";
switch(dayOfWeek){
    case "Mon":
        console.log ("I hate mondays");
        break;
    case "Tues":
    case "Wed":
    case "Thurs":
    case "Fri":
        console.log ("Gotta head to work");
        break;
    default:
        console.log ("Have a good weekend");
        break;
}