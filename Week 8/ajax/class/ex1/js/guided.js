$(document).ready(function () {
    //adding event listeners
    $('#createUserSubmit').bind('click', checkIfUserExists);
    $('#getUserSubmit').bind('click', showExistingUsers);
});

checkIfUserExists = function () {
    var userName = $('#username').val();
    var owner = $('#owner').val();
    $.ajax({
        type: "POST",
        url: "https://itc-colors.appspot.com/add_user",
        data: {
            username: userName,
            owner: owner
        },
        dataType: "json",
        success: function (response) {
            if (response.msg) {
                console.log("worked!");
                console.log(response);
            }
        },
        error: function (msg) {
            console.log("error");
        }
    });
};
showExistingUsers = function () {
    $.ajax({
        type: "GET",
        url: "https://itc-colors.appspot.com/users",
        data: {
            owner: $("#owner").val()
        },
        dataType: "json",
        success: function (response) {
            $('.msg').text(response);
        },
        error: function (msg) {
            console.log("error");
        }
    })
};