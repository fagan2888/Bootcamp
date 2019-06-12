class Player {
    constructor (name,score=0){
        this.name = name;
        this.score = score;
    }
    didWin(){
        if (this.score>30) {
            return `${this.name} win`;
        }
    }
}
let player1 = new Player('yakir',32);
console.log(player1.didWin());