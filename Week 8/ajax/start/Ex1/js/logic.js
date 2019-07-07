$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://itc-colors.appspot.com/get_images",
        dataType: "json",
        success: function (response) {
            response.map((src) => {
                let img = $('<img width=300px, height=300px>');
                img.attr({
                    "src": src
                })
                $('#contanier-img').append(img);
            })
        },
        error: function (msg) {
            console.log("error");
        }
    })
});
