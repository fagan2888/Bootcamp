var counter = 0;
var divTag = document.createElement('div');


var btnTag = document.querySelector('.btn-style');

var idInreval;


window.addEventListener('load',() => {

        idInreval  = setInterval(() => {
        divTag.innerHTML +=`<p>${++counter}</p>`; 
        document.body.appendChild(divTag);
         
    }, 1000)})
 


btnTag.addEventListener('click',()=> {
    clearInterval(idInreval);

})

