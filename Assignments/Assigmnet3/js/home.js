
var saveInput = () => {
    console.log("enter");
    var inputName = document.getElementById("name").value;
    var inputEmail = document.getElementById("email").value;
    var inputPhone = document.getElementById("phone").value;
    userQuiz.name = inputName;
    userQuiz.email = inputEmail;
    userQuiz.phone = inputPhone;
    window.localStorage.setItem("globalStorage", JSON.stringify(userQuiz));
}

