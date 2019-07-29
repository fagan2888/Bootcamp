//Q1
//while loop
var i = 1;
var sum = 0;
while (i < 101 ){
    sum += i;
    i++;
}
console.log(sum);
 

//for loop
i = 1;
sum = 0;
for (var i = 1; i < 101; i++) {
    sum += i;
    
}

console.log(sum);

//Q2
var str = prompt("plaese enter a word");
var reversStr ="";
if (str.length == 0 || str.length === 1 ){
    reverseStr = str;
}
for (var i = str.length -1 ; i >= 0 ; i--) {
    reversStr += str[i]; 
}

console.log(reversStr);