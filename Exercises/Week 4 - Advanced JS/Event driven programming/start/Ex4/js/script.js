var showImg = () => { 
    var cheakBoxAlive = document.getElementById("show-image").checked;
    if (cheakBoxAlive) {
        document.getElementById("img").style.display = "block";
    }
    else {
        document.getElementById("img").style.display = "none";

    }
}

