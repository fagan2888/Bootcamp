$(document).ready(function () {
    $("#btn").click(function () {
        $.ajax({
            type: "GET",
            url: "http://itc-colors.appspot.com/get_images",
            data: "data",
            dataType: "json",
            success: function (data) {
                let containerImg = $("#container-img");
                data.forEach(el => {
                    let img = $(`<img src=${el}>`);
                    $(containerImg).append(img);

                });
            }
        });

    });
});