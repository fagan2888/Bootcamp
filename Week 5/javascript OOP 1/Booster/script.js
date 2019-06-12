class Represent {
    constructor (title,servingSize,ingredients) {
        this.title = title;
        this.servingSize = servingSize;
        this.ingredients = ingredients;
    }
}
let favoriteRecipe = new Represent('omelet','4',['egges','onion','mushroom']);
function printRecipe(Represent){
    for (let prop in Represent) {
        if (prop === 'ingredients') {
            console.log(`* Ingredients:`);
            Represent[prop].forEach(val => console.log(`\t*${val}`));
        }
        else {
            if (prop === 'title') {
                console.log(`*${Represent[prop]}`);
            } else {
                console.log(`*Serves:${Represent[prop]}`);
            }
        }
    }
}
printRecipe(favoriteRecipe);