

$(document).ready(function () {
    $("#id_username").attr('placeholder', 'username');
    $("#id_password1").attr('placeholder', 'password');
    $("#id_password2").attr('placeholder', 'password confirmation');
    $("#btn-submit").click(validation);
});

validation = (e) => {
    password1Val = $("#id_password1").val();
    password2Val = $("#id_password2").val();
    if (password1Val != password2Val) {
        e.preventDefault();
        $("p.error-msg").text('Passwords are not matched, please make sure to type the same password for confirmation');
    }
    if (password1Val.length < 8) {
        e.preventDefault();
        $("p.error-msg").text('Your password must contain at least 8 characters.');
    }
}



