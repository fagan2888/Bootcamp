window.addEventListener('load',setTimeout(() => {
    var tagP = document.createElement('p');
    tagP.innerHTML = 'Thank you for waiting! No one in their right mind would wait for so long for a webpage to load';
    document.body.appendChild(tagP);
}, 15000))