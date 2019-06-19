function transpose(array2d) {
    return array2d[0].map((col, i) => array2d.map(row => row[i]));
}


// let array2d = [[1,2],[3,4,5]];
module.exports = transpose;
