
//where to add
const appendedLi = document.getElementById('dom-list');
//where to be added
const li1 = document.createElement('li');
li1.innerText = "Noman Rocks";
// add the child
const FinalOutput = appendedLi.appendChild(li1);
console.log(FinalOutput);

// 1.Where to add
 const mainSection = document.getElementById('main-container');
// 2.where to add 
const section1 = document.createElement('section')
section1.innerHTML = '<h1>A biscuits is all biscuit </h1>' ;
const outPut= mainSection.appendChild(section1);
output.classList.add('bg-for-fruitsContainer');
console.log(outPut)
