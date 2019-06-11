class Jewel {
    constructor (type, price) {
        this.type = type;
        this.price = price;
    }
    constructor (type,price,wight,typeGold) {
        this.type = type;
        this.price = price;
        this.wight = wight;
        this.typeGold = typeGold;
    }
}
let goldRing = new Jewel("ring",250);
let goldEarring = new Jewel("earring",250,'14k','white');