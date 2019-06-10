var randomNum = Math.floor(Math.random() * 10);  
var guessNum = prompt("please enter your guess number");
if (parseInt(guessNum) == randomNum) {
    console.log("GREAT SUCCESS!");
}
else {
    console.log("FAIL");
}