//Divisable by 3 => Fizz
//Divisable by 6 => Buzz
//Divisable by 3 & 6 => FizzBuzz
//Not divisable by 3 & 6 => input
//Input is not a number => input 


const output = fizzBuzz()
console.log(output)



function fizzBuzz(input){
    if(typeof input !== 'numer')
        console.log("Not a Number")
    elif(input %3 == 0)
        console.log("Fizz")
    elif(input %6 == 0)
        console.log("Buzz")
}