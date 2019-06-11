class Jewel {
    constructor (type, price) {
        this.type = type;
        this.price = price;
    }
}



function getHighterPrice (ring,bracelet) {
    if (ring.price > bracelet.price) {
        return ring.price;
    }
    return bracelet.price;  
}

let ring = new Jewel("ring",250);
let bracelet = new Jewel("bracelet",300);
console.log(getHighterPrice(ring,bracelet));