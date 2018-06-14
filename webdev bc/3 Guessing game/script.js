
var correctNumber = 7;
var stringUserNumber = prompt("Please choose a number");
var userNumber = Number(stringUserNumber);

// check the number

if (userNumber === correctNumber) {
    prompt("You are correct");
} 
// if the number is too low

else if (userNumber < 7) {
    prompt("you are too low");
} 

//if the number is too high
else {
    prompt("you are too high!");
}

