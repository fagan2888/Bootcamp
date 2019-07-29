var minVal = (x,y) => x<y ? x: y;


var resultMin = minVal(1,2);
console.log(resultMin);

var isSubString = (str,substring) => str.includes(substring);

var isSubString = isSubString("hello world", "hell");

console.log(isSubString);