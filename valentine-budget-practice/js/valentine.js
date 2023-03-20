
function getValue(id){
    const value = document.getElementById(id).value;
    return value;
}
function setEmpty (id){
    document.getElementById(id).value = '';
}

function setInnerText(id,value){
    document.getElementById(id).innerText =value;
}
document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
   const quantity = getValue('kitkat-quantity');
   
   const final = quantity *200;
   setEmpty('kitkat-quantity');
   setInnerText('chocolate',final);
   sum();
})
document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const quantity = getValue('rose-quantity');
    const final = quantity *100;
    setEmpty('rose-quantity');
    setInnerText('rose',final);
    sum();
 })
 document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const quantity = getValue('diary-quantity');
    const final = quantity *100;
    setEmpty('diary-quantity');
    setInnerText('diary',final);
    sum();
 })

 function sum(){
    
    const chocolate = parseFloat(document.getElementById('chocolate').innerText);
    const rose = parseFloat(document.getElementById('rose').innerText);
    const diary = parseFloat(document.getElementById('diary').innerText);
    
    const total= chocolate+rose+diary;
    setInnerText('total',total);
 }

function handlePromoCode()
{
    const promoField = document.getElementById('promo-code').value;
    if(promoField === 'Sazin-pot'){
        const finalTotal = parseFloat(document.getElementById('total').innerText);
        const result = finalTotal -(finalTotal/10);
        document.getElementById('all-total').innerText = result;
    }
    else{
        alert("Please put promo code correct");
    }
}