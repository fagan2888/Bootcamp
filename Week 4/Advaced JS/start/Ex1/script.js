"use strict";

document.getElementById("check-box").addEventListener('click',(e) => {
    var newTag = document.createElement('div');
    newTag.innerHTML = `sorry this checkbox cannot be checked`;
    console.log(newTag);
    document.body.appendChild(newTag);
    e.preventDefault();

});


