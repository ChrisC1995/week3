//bronze

for (var c = 0; c <= 30; c = c + 1) //excludes 3, 13, 17
    if (c !== 3 && c !== 13 && c !== 17) {
        console.log(c);
    }

// alterante approach
//if (c== 3 || c ==13 || c ==17) { continue;}
console.log("\n\n\n");

//silver
var result = " ";
for (var i = 10; i <= 50; i++) {
    //  add the numbers together because result is a string, js will add number as a string. 
    result += i.toString();
} //makes the number a string
console.log(result)

//counting backwards with a for loop.
for (var n = 100; n >= 0; n--) { //(variable, condition, action)
    console.log(n);
}
console.log("\n\n\n");

//counting backwards with a while loop
console.log("\n\n\n");
var n = 101
while (n > 0) { // same as above for loop, but while. 
    n--;
    console.log(n);
}
console.log("\n\n\n");
// counting from 1- 10 with a while loop
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
//counting from 100 backwards by 5
console.log("\n\n\n");
for (var i = 100; i >= 0; i=i-5) { //(variable, condition, action)
    console.log(i);
}
console.log("\n\n\n");
//counting from 100 while
var x = 100;
while(x >= 0) {
    console.log(x)
    x= x-1;
}


console.log("\n\n\n");
// if divisbile by 25, print that
for (var i = 100; i >= 0; i=i-5) { //(variable, condition, action)
    if(i % 25 == 0 && i != 0) { // = no remainder, put == 0 to find divisible
        console.log(i + " is divisible by 25");
}
    else(console.log(i));
}
