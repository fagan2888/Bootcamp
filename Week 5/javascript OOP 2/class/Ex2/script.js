class Player {
    constructor (name,score=0){
        this.name = name;
        this.score = score;
    }
    didWin() {
       return this.score > 30;
    }
    checkIfPlayerWon() { 
        return this.didWin() ? `${this.name} won` : `${this.name} lost`;
    }
}
let player1 = new Player('yakir',32);
console.log(player1.checkIfPlayerWon());