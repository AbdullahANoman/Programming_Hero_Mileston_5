// option : 1 :-
// Directly Used on html tag 

// option:2 
// Important Use this someTime
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option:3 
const makeBlue = document.getElementById('makeBlue');
makeBlue.onclick = makeColor;
function makeColor(){
    document.body.style.backgroundColor = 'blue';
}

// option:3 another
const makePurple= document.getElementById('makePurple');
makePurple.onclick = function (){
    document.body.style.backgroundColor = 'purple';
}

// option-4 :
const makeGreen = document.getElementById('makeGreen');
makeGreen.addEventListener('click',MakeGreen)
function MakeGreen(){
    document.body.style.backgroundColor= 'green';
}

// option -4 another :
const makePink = document.getElementById('makePink');
makePink.addEventListener('click',function(){
    document.body.style.backgroundColor = 'pink';
})

// option -4 final :
// Important We will use this sometime 
document.getElementById('makeGoldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})
