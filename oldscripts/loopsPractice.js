for(i=3;i<=100;i++)
    console.log(i);

    //0 to 20 loop, even or odd
for (var i = 0; i <= 20; i++) {
    if(i % 2 == 0 && i !== 0){
    console.log(i + " number is even");}
    else if (i == 0){
        console.log(i);
    }
    else {console.log(i + " number is odd");}
}


var grade = 101
if (grade >= 90){
    console.log("You got an A");}
    else if (grade >=80){
        console.log("You got a B");
    }
    else if (grade >=70) {
        console.log ("you got a C");
    }
    else {(console.log("you fail"));}

// while num is less than 50, count by 2, from 0
var num = 0
while(num <= 50){
    console.log(num)
    num = num+2;
}

function sum(num1, num2){
    var sum = num1 + num2
    return sum;
};
var a = sum(50, 70);
console.log(a);

function getAge(){
    var x = 21;
    return x
}
p = getAge();
console.log(p);