for(var i=1; i <= 100; i=i+1){
    if(i % 3 == 0 && i % 5 ==0){ //first because it is requires the most objectives to be met. if i is divisbile by 3 ==0 and i is divisbile by 5 == 0 print fizzbuzz 
        console.log(" FizzBuzz"); // order of operations in code: if cancels out as soon as it is met. 
    }
    else if(i % 3== 0) {
        console.log(" Fizz");
    }
    else if(i % 5== 0) {
        console.log(" Buzz");
    }
    else (console.log(i)); 
}