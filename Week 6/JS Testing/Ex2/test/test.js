let expect = require('chai').expect;
let transpose = require('../js/script');



describe('transfom 2d arrays', function () {
    it('row and col equals', function () {
        expect(transpose([
            [1, 2],
            [3, 4]
        ])).to.deep.equal(
            [
                [1, 3],
                [2, 4]
            ]);
    });
    it('rows and cols have a diffrent size', function () {
        expect(transpose([
            [1, 2, 3],
            [4, 5]
        ])).to.deep.equal(
            [
                [1, 4],
                [2, 5],
                [3, undefined]
            ]);
    });
})

