var validInput = () => {
    var counterChar = 0;
    var inputUser = document.getElementById("job-position").value;
    if (inputUser.length<100) {
        document.getElementById("messageValid").innerHTML = "You must enter at least 100 characters ";
        

    }
    //console.log(inputUser.length);
}