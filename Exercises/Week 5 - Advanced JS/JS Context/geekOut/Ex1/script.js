// printMessage.bind(document.getElementById('body').children);


let msgElement  = document.createElement(<span></span>);
msgElement.setAttribute('id','msg');

function printMessage(msg) {
    document.getElementById("msg").textContent = msg;
}


var btnOpen = $('open');
btnOpen.addEventListener('click',function () {


}.bind(printMessage))


var btnClose = $('close');
btnClose.addEventListener('click',function () {
    
})