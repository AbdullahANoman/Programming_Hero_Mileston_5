function updateNumber(isIncrease,id){
    const caseField = document.getElementById(id);
    const caseFieldString = caseField.value;
    const caseFieldAmount = parseInt(caseFieldString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = caseFieldAmount+1;
    }
    else{
         newCaseNumber =caseFieldAmount-1;
    }
    caseField.value=newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalNumber (id,value){
    const totalField = document.getElementById(id);
    totalField.innerText = value*59;
}
function updatePhoneTotalNumber (id,value){
    const totalField = document.getElementById(id);
    totalField.innerText = value*1219;
}


function updateSubTotal() {
    const totalPhonePrice = parseInt(document.getElementById('phone-amount').innerText);
    const totalCasePrice = parseInt(document.getElementById('case-amount').innerText);
    
    const subTotalField = document.getElementById('sub-total-price');
    subTotalField.innerText = totalPhonePrice+totalCasePrice;
}
function updateTax(){
    const subTotal = parseInt(document.getElementById('sub-total-price').innerText);
    const taxField = document.getElementById('tax-price');
    taxField.innerText = parseInt(subTotal * 0.1);
    const taxTotal = parseInt(document.getElementById('tax-price').innerText);
    const totalField = document.getElementById('total-price');
    totalField.innerText = subTotal+taxTotal;
}