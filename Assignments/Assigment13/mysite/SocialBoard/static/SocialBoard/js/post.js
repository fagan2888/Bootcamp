board = {};

board.addnewpost = function () {
    $("#newpostbtn").hide();
    $("#newpostdiv").show();
    $("#confirmbox").show();
};
board.formatDate = function (date) {
    var day = date.getDate();
    // month start from 0, this i why plus '1'
    var month = date.getMonth() + 1;
    if (month <= 9) {
        month = '0' + String(month)
    }
    var year = date.getFullYear();
    var finaldate = day + "/" + month + "/" + year;
    return finaldate
}

board.cancelnewmsg = function () {
    $("#newpostdiv").hide();
    $("#confirmbox").hide();
    $("#newpostbtn").show();
};
board.updateall = function () {
    $("#closebtn").bind("click", board.cancelnewmsg);
};
board.createnewpost = function () {
    var data = {
        "text": $("#newtext").val(),
        "title": $("#newtitle").val(),
        "author": $("#newauthor").val()
    };
    $.ajax({
        type: "POST",
        url: "/board/post/add",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            // return data
            // console.log(newFieldset)
            // let newFieldset= `<fieldset class="post_div center-block">
            //                         <legend>
            //                             <p class="pubdate">`${board.formatDate(new Date)}`</p>
            //                         </legend>
            //                         <p class="posttitle">`${data["title"]}`</p>
            //                     <p class="postmsg">`${data["text"]}`</p>
            //                     <p class="postauthor">`${data["author"]}`</p>
            //                         <br>
            //                 </fieldset>`
            // $("#row").append(newFieldset);
            board.updateall();
            $("#newtext").val("");
            $("#newtitle").val("");
            $("#newauthor").val("");
            $("#nomsgbox").hide();
        }
    });
};




board.start = function () {
    $(document).ready(function () {
        $("#plusbtn").bind("click", board.addnewpost);
        $("#confirmbtn").bind("click", board.createnewpost);
        $("#closebtn").bind("click", board.cancelnewmsg);
        $("#newpostdate").text(board.formatDate(new Date));

    })
}
board.start();