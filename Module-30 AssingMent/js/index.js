// random color generate 
function randomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}
const cards = document.getElementsByClassName("card");
for (const card of cards) {
card.addEventListener("mouseover", function(){
    card.style.backgroundColor = randomColor();
})
}
let n = 0;
// input field value function 
function getValue (id){
    const value = parseFloat(document.getElementById(id).value);
    return value;
}
// field innerText function  
function getInnerText(id){
    const value = document.getElementById(id).innerText;
    return value;
}
// display the data in table 
function displayData (name,result){
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${n}</td>
    <td>${name}</td>
    <td>${result }cm<sup>2</sup></td>
    <td><button class="btn btn-primary md:w-full">Convert to m<sup>2</sup></button></td>
    
    `;
    container.appendChild(tr);
}
// validation and check the data and display function call 
function validation(firstField,secondField,CardName,result){
    if(isNaN(result)  ||
    firstField < 1 || secondField < 1 )
    {
        alert('Please input correctly');
        return;
    }
    else{
        n+=1;
        displayData(CardName,result);
    }
}
document.getElementById('first-card').addEventListener('onmouseover',function(){
    setRandom('first-card');
})
// first card 
document.getElementById('first-calculate-btn').addEventListener('click',function(){
    const firstCardName = getInnerText('first-card-name')
    const firstField = getValue('first-card-first-field');
    const secondField = getValue('first-card-second-field');
    const result = 0.5*firstField*secondField;
    result1 =parseFloat(result.toFixed(2));
    validation(firstField,secondField,firstCardName,result1); 
})
// second card 
document.getElementById('second-calculate-btn').addEventListener('click',function(){
    const secondCardName = getInnerText('second-card-name');
    const firstField = getValue('second-card-first-field');
    const secondField = getValue('second-card-second-field');
    const result = firstField*secondField;
    result1 =parseFloat(result.toFixed(2));
    validation(firstField,secondField,secondCardName,result1);
})
// third card 
document.getElementById('third-calculate-btn').addEventListener('click',function(){
    const thirdCardName = getInnerText('third-card-name')
    const firstField = getValue('third-card-first-field');
    const secondField = getValue('third-card-second-field');
    const result = firstField*secondField;
    result1 =parseFloat(result.toFixed(2));
    validation(firstField,secondField,thirdCardName,result1);  
})
// fourth card 
document.getElementById('fourth-calculate-btn').addEventListener('click',function(){
    const fourthCardName = getInnerText('fourth-card-name')
    const firstField = getValue('fourth-card-first-field');
    const secondField = getValue('fourth-card-second-field');
    const result = 0.5*firstField*secondField;
    result1 =parseFloat(result.toFixed(2));
    validation(firstField,secondField,fourthCardName,result1);
})

// fifth card 
document.getElementById('fifth-calculate-btn').addEventListener('click',function(){
    const fifthCardName = getInnerText('fifth-card-name')
    const firstField = getValue('fifth-card-first-field');
    const secondField = getValue('fifth-card-second-field');
    const result = 0.5*firstField*secondField;
    result1 =parseFloat(result.toFixed(2));
    validation(firstField,secondField,fifthCardName,result1); 
})
// sixth card 
document.getElementById('sixth-calculate-btn').addEventListener('click',function(){
    const sixthCardName = getInnerText('sixth-card-name')
    const firstField = getValue('sixth-card-first-field');
    const secondField = getValue('sixth-card-second-field');
    const result = 3.14*firstField*secondField;
    result1 =parseFloat(result.toFixed(2));
    validation(firstField,secondField,sixthCardName,result1);  
})

// new tab 

function callAnother(){
        window.open('answer.html' );
}

