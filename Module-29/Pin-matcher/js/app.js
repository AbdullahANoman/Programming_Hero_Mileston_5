function generatePin(){
    const generatePin = Math.round(Math.random()*10000);
    return generatePin;
}

function getPin(){
    const pin = generatePin();
    const pinString = pin +'';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
document.getElementById('btn-generate').addEventListener('click',function(){
   const pinNumber = getPin();
   const pinField = document.getElementById('pin-field');
   pinField.value = pinNumber;
})