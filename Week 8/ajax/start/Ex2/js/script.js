$(document).ready(function () {
    //adding event listeners
    $('#addColorSubmit').bind('click', addColorToServer);
    $('#getColorSubmit').bind('click', getColorFromServer);
});

addColorToServer = function () {
    var colorName = $('#color').val();
    $.ajax({
        type: "POST",
        url: "https://itc-colors.appspot.com/add_color",
        data: {
            color: colorName,
        },
        success: function (response) {
            if (response.msg) {
                console.log("worked!");
                console.log(response);
            }
        },
        error: function (msg) {
            console.log("error");
            console.log(msg);
        }
    });
};
getColorFromServer = function () {
    console.log('get');
    $.ajax({
        type: "GET",
        url: "https://itc-colors.appspot.com/colors",
        dataType: "json",
        success: function (response) {
            let listColor = $('list-color');
            let ul = $('<ul></ul>');
            response.map((name) => {
                let li = $(`<li>${name}</li>`);
                ul.append(li);
            })
            listColor.append(ul);
        },
        error: function (msg) {
            console.log(msg);
            console.log("error");
        }
    })
};