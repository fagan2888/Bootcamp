var wolverine = {
    birth_year: 1888,
    printBirthYear: function () {
        console.log(this.birth_year);
    }
}
var wolverineNew = {birth_year:1900};

wolverine.printBirthYear.call(wolverineNew);