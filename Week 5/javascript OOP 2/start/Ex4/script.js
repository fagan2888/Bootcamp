class Plant {
    constructor (season,color,blossom) {
        this.season = season;
        this.color = color;
        this.blossom = blossom;
    }
}
let plants = [new Plant('summer','red',true),new Plant('autumn','yellow',false),new Plant('summer','white',true)];
function getPlantsBySeason(plants, season) {
    let plantInSeason = [];
    for (let index = 0; index < plants.length; index++) {
        if (plants[index].season === season && plants[index].blossom) {
            plantInSeason.push(plants[index]);
        }
 }
    return plantInSeason;
}
let result = getPlantsBySeason(plants,'summer');
console.log(result);




