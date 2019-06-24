class Plant {
    constructor(name, color, seasons, isBlossom) {
        this.name = name;
        this.color = color;
        this.seasons = seasons;
        this.isBlossom = isBlossom;
    }
    isBlossomInSeason(season) {
        return this.isBlossom && this.seasons.includes(season);
    }
}
const p1 = new Plant("Anemone", "red", ["autumn"], true);
const p2 = new Plant("tulip", "red", ["spring"], true);
const p3 = new Plant("Boston fern", "green", ["spring", "summer"], false);
let plants = [p1, p2, p3, p4, p5];
function getPlantsBySeason(plants, season) {
    return plants.filter(plant => plant.isBlossomInSeason(season));
}
//test case:
console.log(getPlantsBySeason(plants, "spring"));
console.log(getPlantsBySeason(plants, "autumn"));
console.log(getPlantsBySeason(plants, "summer"));