class Dog {
    constructor (name, type, age, isCuddle) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.isCuddle = isCuddle;
    }
}
let dog1 = new Dog ("Koki","chiniPug",3,true);
let dog2 = new Dog ("Bomer","lavrador",5,false);
let dog3 = new Dog ("Lasi","booldog",2,true);
let arrDog = [dog1,dog2,dog3]; 
function describeDog(dog) {
    let loveHateCuddle = (dog.isCuddle) ? 'loves to cuddle' : 'hate to cuddle';
    for (let prop in dog) {
       return `this is ${dog[prop]} a ${dog[prop]}. He is ${dog[prop]} years old and ${loveHateCuddle}`    
    }
}
arrDog.forEach((index) => {
    console.log(describeDog(index))
})