function transpose(array2d) {
    return array2d[0].map((col, i) => array2d.map(row => row[i]));
}
module.exports = transpose;
let result = transpose([[1, 2, 3],
[4, 5]]);