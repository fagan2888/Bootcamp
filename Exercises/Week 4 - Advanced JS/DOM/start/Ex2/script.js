const minSizeFont  = 6;
const maxSizeFont = 100;
var fontSize = [];
for (var index = minSizeFont; index <= maxSizeFont  ; index ++ ) {
    fontSize.push(index);
}

var defultFontToTitle = fontSize[Math.floor(Math.random() * fontSize.length)];
// console.log(defultFontToTitle);
var titleText = 'some text here';






var elTitle = document.createElement("h1");
elTitle.style.fontSize = `${defultFontToTitle}px`;

elTitle.innerHTML = titleText; 
document.body.appendChild(elTitle);



var buttonPlus = document.createElement("button");
buttonPlus.innerHTML = "+";




var buttonMinus = document.createElement("button");
buttonMinus.innerHTML = "-";
buttonMinus.addEventListener('click',decreseFont);



document.body.appendChild(buttonPlus);
document.body.appendChild(buttonMinus);
buttonPlus.addEventListener('click',increseFont);






function increseFont  ()  {
    var bigeerFontSize = defultFontToTitle;
    console.log(bigeerFontSize);
   if(bigeerFontSize < maxSizeFont) {
       bigeerFontSize++;
    //    console.log(bigeerFontSize);
    elTitle.style.fontSize =`${bigeerFontSize}px`;
    defultFontToTitle = bigeerFontSize;
   }
}
function decreseFont  () {
    var smallerFontSize = defultFontToTitle;
   if(smallerFontSize > minSizeFont) {
        smallerFontSize--;
        elTitle.style.fontSize =`${smallerFontSize}px`;
        defultFontToTitle = smallerFontSize;
   }
}