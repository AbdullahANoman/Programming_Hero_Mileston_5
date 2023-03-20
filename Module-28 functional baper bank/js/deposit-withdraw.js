
function getValue(id){
   const value = parseFloat(document.getElementById(id).value);
   return value;
}
function emptyField(id){
    document.getElementById(id).value= '';
}
function getInnerText(id){
    const value = parseFloat(document.getElementById(id).innerText);
    return value;
}
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFieldValue =  getValue('deposit-field');
    emptyField('deposit-field');
    if(isNaN(depositFieldValue)){
        alert('Please provide a number');
        return;
    }
    const depositValue = getInnerText('deposit-value');
    const finalDeposit = depositFieldValue+depositValue
    setInnerText('deposit-value',finalDeposit);
    const totalField = getInnerText('balance-field');
    const final = totalField + finalDeposit;
    setInnerText('balance-field',final);

})
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFieldValue = getValue('withdraw-field');
    emptyField('withdraw-field');
    if(isNaN(withdrawFieldValue)){
        alert('Please provide a number');
        return;
    }
    const withDrawValue = getInnerText('withdraw-value');
    const finalWithDraw = withdrawFieldValue+withDrawValue;
    const totalField = getInnerText('balance-field');
    if(totalField<finalWithDraw){
        alert('please deposit some money')
        return ;
    }
    setInnerText('withdraw-value',finalWithDraw);
    const final = totalField - finalWithDraw;
    setInnerText('balance-field',final);
})