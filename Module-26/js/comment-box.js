
document.getElementById('button-post').addEventListener('click',function(){
    const commentBox = document.getElementById('comment-box');
    const container = document.getElementById('container');
    const p = document.createElement('p');
    container.appendChild(p);
    p.innerText = commentBox.value;
    commentBox.value='';
})