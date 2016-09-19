var a = 19;
var b = 40;
var c; //C will hold onto A while B grants its value to A. 

var c=a;
var a = b;
var b = c; //B grabes A's oringal value from C'
console.log(a,b); //bronze

var x = 5;
var y = 2;
var z = 4;
var sum = x * y;
var sum1 = sum/z;
console.log(sum1); //silver

var theNum = 5; // gold
var theNum= theNum -1; // -- = -1
var theNewNum =15;
var theNum = theNum - theNewNum * 2;
var theNum = 5 - theNum/3;
console.log("The answer is\n:" + theNum); // put a + to add string and var \n means start a new line.

// cool string stff
console.log("a\tb\tc\td\ns\tf\tg\th\n");