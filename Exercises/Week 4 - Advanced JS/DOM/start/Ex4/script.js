





var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", changeBackgroundImage);
}

function changeBackgroundImage() {
    var imageDiv = document.querySelector('#img');
    var activeBackground = imageDiv.className;
    imageDiv.classList.remove(activeBackground);
    for (i = 0; i < buttons.length; i++) {
        if (this === buttons[i]) {
            imageDiv.classList.add(buttons[i].value);
        }
    }
}