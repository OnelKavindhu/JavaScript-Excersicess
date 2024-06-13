var petDog = "Rex";
var petCat = "Pepper";

console.log(petDog);
console.log(petCat);

console.log("My pet Dog's name is: " , petDog);
console.log("My pet Cat's name is: " , petCat);

var catSound = "purr";
var dogSound = "woof";

console.log(petDog , "syas" , dogSound);
console.log(petCat , "syas" , catSound);

catSound = "meow";

console.log(petCat, "now says ", catSound);

var score = 8;
console.log("Mid-level skills:" ,0<score && score<10);

var timeRemaining = 0;
var energy = 10;
console.log("Game over: " ,timeRemaining ==0 || energy ==0);

var num1 = 2;
var num2 = 5;
var test1 = num1%2;
var test2 = num2%2;
var result1 = test1;
var result2 = test2;

console.log("Is",num1 ,"an even number?" ,result1 == 0);
console.log("Is" ,num2 ,"an even number?" ,result2 ==0);


var now = "Now in ";
var three = 3;
var d = "D!";

console.log(now + three + d);

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);


var age = 10;

if(age>=65){
    console.log("You get yor income from your pansion");
}
else if(age<65 && age>=18){
    console.log("Each month you get a salary");
}
else if(age<18){
    console.log("You get an allowance");
}else{
    console.log("The value of the age variable is not numarical");
}


for(var i=1; i <= 5; i++){
    console.log(i);
};
console.log("Countdown Completed");


var i = 0;
while(i<5){
    console.log(i)
    i++;
}
console.log("coundown completed");

var i=1;
for(i=1; i<=10; i++){
    if(i==1){
        console.log("Gold Medal")
    }else if(i==2){
        console.log("Silver Medal")
    }else if(i==3){
        console.log("Bronze Medal")
    }else{
        console.log(i)
    }
}



function letterFinder(word, match){
var i = 0;
    for(i=0; i < word.length; i++){
       if(word[i] == match){
            console.log("Found the", match, "at", i)
        }else{
            console.log("--No match found at", i);
        }
    }
}
letterFinder("test", "t");

