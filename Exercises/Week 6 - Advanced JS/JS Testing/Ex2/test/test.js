let expect = require('chai').expect;
let transpose = require('../js/script');
describe('transfom 2d arrays', function () {
    it('should transpose a 2x2 matrix', function () {
        const MATRIX = [[1, 2], [3, 4]];
        const TRANSPOSED = [[1, 3], [2, 4]];
        expect(transpose(MATRIX)
        ).to.deep.equal(TRANSPOSED);
    })
    it('transfom asymmetric matrix', function () {
        const MATRIX_ASYMMETRIC = [[1, 2, 3], [4, 5]];
        const TRANSPOSED_ASYMMETRIC = [[1, 4], [2, 5], [3, undefined]];
        expect(transpose(MATRIX_ASYMMETRIC)
        ).to.deep.equal(TRANSPOSED_ASYMMETRIC);
    });
})



