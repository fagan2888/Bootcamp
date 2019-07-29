$(document).ready(function () {
    setInterval(getModeAc, 2000);
});
getModeAc = function () {
    $.ajax({
        type: "GET",
        url: "https://itc-colors.appspot.com/aircon/state",
        dataType: "json",
        success: function (response) {
            console.log(response);
            if (response.state === 'off') {
                $('#description').empty();
                $('#power').addClass("off");
            } else if (response.state === 'on') {
                $('#power').addClass("on");
                $('#description').empty();
                let mode;
                switch (response.mode) {
                    case "fan":
                        mode = $(`<div class="fan"></div>`);
                        break;
                    case "dry":
                        mode = $(`<div class="dry"></div>`)
                        break;
                    case "cool":
                        mode = $(`<div class="cool"></div>`);
                    default:
                        break;
                }
                let temp = $(`<div class="temp">${response.temp} C</div>`);
                $('#description').append(mode);
                $('#description').append(temp);

            }

        },
        error: function (msg) {
            console.log(msg);
            console.log("error");
        }
    })
};