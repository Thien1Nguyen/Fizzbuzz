// Write code that will go through each number from 1 to 100 and:

// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally


for(var numb = 1; numb <= 100; numb++){
    if (numb % 3 === 0 && numb % 5 === 0){
        console.log("FizzBuzz")
    }
    else if(numb % 5 === 0){
        console.log("Buzz");
    }
    else if(numb % 3 === 0){
        console.log("Fizz");
    }
    else{
        console.log(numb)
    }
}