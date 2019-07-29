

var time  = document.createElement('div');
document.body.appendChild(time);
setInterval(() => {
    var CurrentTime = new Date();
    var houres = CurrentTime.getHours();
    var minutes = CurrentTime.getMinutes();
    var newMinutes = oneNumber(minutes);
    var second = CurrentTime.getSeconds();
    var newSecond = oneNumber(second);
    time.innerHTML = `${houres}:${newMinutes}:${newSecond}`
}, 1000);



function oneNumber (number) {
    if (number.toString().length === 1) {
        return "0"+ number;
        
    }
    return number;
}