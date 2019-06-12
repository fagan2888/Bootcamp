class Account {
    constructor (sum) {
        this.sum = sum;
    }
    deposit (value) {
        this.sum += value;
    }
    withdraw (value){
        this.sum -= value;
    }
    canWithdraw (value) {
        return this.sum - value > 0;
    }
    lottery(account) {
        let ranNumber = Math.floor(Math.random() * 100); 
        console.log(ranNumber);
        if (!account.canWithdraw(100)) {
            return `you didnt withdraw 100$`;
        }
        if (ranNumber %1 === 0) {
            account.deposit(30);
        }
        this.withdraw(account.sum);
    }
}
let account = new Account (1000);
for (let index = 0; index < 5; index++) {
   let canWithdraw100 = account.lottery(account);
   console.log(canWithdraw100);
}
console.log("final sum: "+account.sum);

