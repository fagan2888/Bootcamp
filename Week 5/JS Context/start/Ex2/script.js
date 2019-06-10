const printObject = {
    name:"yakir",
    printName: function () {
        console.log(this.name);    
    }, 
    printNameAfterSec:function () {
        setTimeout( function(){
        console.log(this.name)
        }.bind(this), 1000);
    }
}
printObject.printName();
printObject.printNameAfterSec();