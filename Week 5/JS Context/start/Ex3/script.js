
var glabalContext = 'this is gloal context';
var spiderMan = {
    favourite_animal: "spider"
}
function printFavouriteAnimal() {
    console.log(this.favourite_animal);
    return this.favourite_animal;
}
var favourite_animal ="contnext global";
//1. spider man object context
var context1 = printFavouriteAnimal.bind(spiderMan);
//2.the global scope
var context2 = printFavouriteAnimal.bind(this);
//3. a context you pass to the function on the fly
var context3 = printFavouriteAnimal.bind({favourite_animal: "spider"});

context1();
context2();
context3();