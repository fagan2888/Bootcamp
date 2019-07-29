var  in_range = (arr,start, end) => arr.filter((val)=> val >= start && val <= end);

var arrResult =  in_range([2,33,46,22,29,1,7,45454,33,10], 10, 87);
console.log(arrResult.toString());