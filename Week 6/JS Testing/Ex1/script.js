function isPalindrome(str) {
    if (str.length === 1 || str.length === 0) {
        return true;
    }
    let strUperCase = str.toUpperCase();
    let len = strUperCase.length;
    for (let i = 0; i < len / 2; i++) {
        if (strUperCase[i] !== strUperCase[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;


