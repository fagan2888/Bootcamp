var createSequence = (d) => {
    var arithmeticSequence = {
        d, printElements: (num) => {
            var defaultVal = 0;
            var str =`${defaultVal},`;
            for (let i = 1; i < num ; i++) {
                defaultVal += d;
                if (i == num-1) {
                    str += `${defaultVal}`;
                }else{
                    str += `${defaultVal},`;
                }
            }
            console.log(str);
        }

    }
    return arithmeticSequence;
}

//testing
createSequence(2).printElements(10);
createSequence(6).printElements(5);