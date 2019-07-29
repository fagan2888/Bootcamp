function getLenghtOfStrings (array) {
    var newArray = [];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        var temp = array.shift().length;
        newArray.push(temp);
    }
    return newArray;
}
var result = getLenghtOfStrings (["boo", "doooo", "hoo","ro"]);
console.log(result.toString());



//NINJA

var getLenghtOfStrings = arr => arr.map(i => i.length);
var resultWithOutLoop = getLenghtOfStrings(["boo", "doooo", "hoo","ro"]);
console.log(resultWithOutLoop.toString());