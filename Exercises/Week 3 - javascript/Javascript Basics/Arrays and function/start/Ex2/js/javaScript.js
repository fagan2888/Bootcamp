var sum =  arr => arr.reduce((preIndex , postIndex) => preIndex + postIndex);
 
var result = sum([1,2,3,4,5]);
console.log("result: "+result);


//NINJA
var mapArray = (arr => {
    var sumOfArr =  [];
    for (let i = 0; i < arr.length; i++) {
        sumOfArr.push( arr[i].reduce((pre , post ) => pre + post));
    }
    var sumOfArrays = sumOfArr.reduce((pre,post) => pre + post);
    return sumOfArrays;

})
var resultNinja = mapArray([[1,2,3,4,5],[2,2,2,2,2],[1,1,1,1,1],[2]]);
console.log(resultNinja);
