const output = fizzBuzz(5)

function fizzBuzz(input){
    if(typeof input !== 'numer')
        console.log("Not a Number"); 
    if(input %3 === 0)
        console.log("Fizz")
    if(input %5 === 0)
        console.log("Buzz")
    if(input %3 === 0 && input %5 === 0)
        console.log("FizzBuzz")
    if(input %3 !== 0 || input %5 !== 0)
        console.log(input)

    
}