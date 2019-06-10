//Q1
var num1 = prompt("Please enter a number");
var num2 = prompt("please enter a second number");
if (num1 > num2) { 
    if (num2 === 0){
        console.log(1);
    }
    console.log(num1/num2)
}
else {
    if (num2 == 0){
        console.log(1);
    }
    console.log(num2/num1);
}
//Q2
var value = prompt("please enter a value");
if (!isNaN(parseInt(value))) {
    value = parseInt(value) + 5;
    console.log(value);
}
else {
    console.log(value+" !!!");
}
//Q3
var str1 = prompt("please enter a word");
var str2 = prompt("please enter a second word");

if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("you insert the equal words");
}

