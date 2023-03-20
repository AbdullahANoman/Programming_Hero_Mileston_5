document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newCaseNumber = updateNumber(true,'phone-field');
    updatePhoneTotalNumber('phone-amount',newCaseNumber);
    updateSubTotal();
    updateTax()
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newCaseNumber = updateNumber(false,'phone-field');
    updatePhoneTotalNumber('phone-amount',newCaseNumber);
    updateSubTotal();
    updateTax()
})