class Shoes {
    constructor(name,mySize){
        this.name =name;
        this.mySize = mySize;
    }
    isSizeAvilable (arrySize) {
        return arrySize.includes(this.mySize); 
    }
}
let shoes1 = new Shoes('yakir',36);
let resultSzieAvalible = shoes1.isSizeAvilable([36,38,44]) ? `the size is available` : `the size isnt available`;
console.log(resultSzieAvalible);