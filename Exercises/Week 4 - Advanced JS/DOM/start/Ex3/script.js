var title = `how many smilyes do you want to see`;
var titleTag = document.createElement('div');
titleTag.innerHTML  = title;


var btn = document.getElementById("submit");
var tagInnput = document.getElementById("conut-smiley");



document.body.insertBefore(titleTag,document.body.firstChild);
btn.addEventListener('click',createSmiles);
var div = document.createElement('div');



function createSmiles() {
    div.innerHTML ="";
    var inputUser = tagInnput.value;
    if (!isNaN(inputUser)) {
        for (let index = 0; index < inputUser; index++) {
            var imgTag = document.createElement('img');
            imgTag.setAttribute('src','./src/img/smiley_logo.jpg');
            imgTag.style.width ='40px';
            imgTag.style.height = '40px';
            div.appendChild(imgTag);
            document.body.appendChild(div);
        }
    }
    else {
        var errMessage  ='you need insert a number';
        div.innerHTML = errMessage;

    }


    
}