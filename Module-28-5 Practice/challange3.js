document.getElementById('bold').addEventListener('click',function(){
    const textArea = document.getElementById('textArea');
    textArea.style.fontWeight = 'bold'
})

document.getElementById('italic').addEventListener('click',function(){
    const textArea = document.getElementById('textArea');
    textArea.style.fontStyle = 'italic'
})
document.getElementById('underLine').addEventListener('click',function(){
    const textArea = document.getElementById('textArea');
    textArea.style.textDecoration = 'underline'
})
document.getElementById('right').addEventListener('click',function(){
    const textArea = document.getElementById('textArea');
    textArea.style.textAlign = 'right'
})
document.getElementById('center').addEventListener('click',function(){
    const textArea = document.getElementById('textArea');
    textArea.style.textAlign= 'center'
})
document.getElementById('left').addEventListener('click',function(){
    const textArea = document.getElementById('textArea');
    textArea.style.textAlign = 'left'
})
