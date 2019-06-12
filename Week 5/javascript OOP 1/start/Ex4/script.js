class Player {
    constructor (name,score=0){
        this.name = name;
        this.score = score;
    }
    play () {
        let ranNaumber = Math.floor(Math.random() * 10) +1;
        if (ranNaumber % 2 === 0) {
            this.score++;
        }
    }
}
let play1 = new Player("yakir");
function checkScoreAfterThreeRuonds(){
    for (let index = 0; index < 3; index++) {
        play1.play();
    }
    console.log('score: '+play1.score);
}
checkScoreAfterThreeRuonds();