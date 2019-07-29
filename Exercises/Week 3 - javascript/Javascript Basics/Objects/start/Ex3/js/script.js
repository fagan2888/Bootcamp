var candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

var getCandy = (candyStore,id) => candyStore["candies"].filter((candy)=> candy.id === id)[0];
console.log(getCandy(candyStore,"as12f"));
var getPrice = (candyStore,id) => candyStore["candies"].filter((candy)=> candy.id === id)[0].price;
var addCandy = (candyStore,id,name,price) => candyStore["candies"].push({name,id,price,amount:1});
var buy = (candyStore,id) =>
{
 
        getCandy(candyStore,id).amount --;
        candyStore.cashRegister -= getCandy(candyStore,id).price;
    
}


console.log(getCandy(candyStore,"as12f"));
console.log(getPrice(candyStore,"as12f"));
addCandy(candyStore,"1234","yakir",100);
buy(candyStore,"as12f");
console.log(candyStore);
