function make_display1(){
    const defaultValue = document.getElementById('defaultValue');
    defaultValue.innerText = 'I am noman';
}

document.getElementById('make-display2').addEventListener('click',function(){
    const defaultValue = document.getElementById('defaultValue');
    defaultValue.innerText = 'I am addListener Noman';
})

document.getElementById('update-button').addEventListener('click',function(){
    document.getElementById('default-input').innerText = document.getElementById('input-field').value;
    document.getElementById('input-field').value ='';
})

// function name(){
//     const valueInput = document.getElementById('input-field');
//     document.getElementById('default-input').innerText= valueInput.value;
// }

