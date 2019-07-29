var switchLight = () => {
    var cheakBoxAlive = document.getElementById("tuggle-lightbulb").checked;
    var imgTag = document.getElementById("img");
    if (cheakBoxAlive) {
        imgTag.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuQfqUgERLsmJr5C669pnzz7IILo7gvbdHTrc53n_8j5v-v6_";
    }
    else {
        imgTag.src ="https://i.dailymail.co.uk/i/pix/2014/01/26/article-2546363-1AFB247500000578-934_306x423.jpg";
    }
}