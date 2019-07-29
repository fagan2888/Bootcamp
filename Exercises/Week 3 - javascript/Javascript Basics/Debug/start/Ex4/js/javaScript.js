function findSmallest(a, b, c) {
    if (a > c && b > c) {
        return c;
    } else if (a > b) {
        return b;
    } else {
        return a;
    }
}
findSmallest(52, 66, 2);
