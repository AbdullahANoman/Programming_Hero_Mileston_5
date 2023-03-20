document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateNumber(true,'case-field');
    updateCaseTotalNumber('case-amount',newCaseNumber);
    updateSubTotal();
    updateTax()
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateNumber(false,'case-field');
    updateCaseTotalNumber('case-amount',newCaseNumber);
    updateSubTotal();
    updateTax()
})
