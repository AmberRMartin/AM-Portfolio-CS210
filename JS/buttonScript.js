//buttonScript.js
function displayMessage(){
    window.alert('Hello')
}

const btn1=document.querySelector('#btn-1');
btn1.addEventListener('click', addParagraph);

function addParagraph(){
    const newElement = document.createElement('p');
    newElement.textContent='New Paragraph';
    document.body.appendChild(newElement);
}

document.querySelector('.container').appendChild(newElement);

const btn2=document.querySelector('#btn-2');
btn2.addEventListener('click', RemoveParagraph);

function RemoveParagraph(){
    const list = document.querySelector('.container');
    list.children[list.children.length-1].remove();
}

//motherfucker. 10/28 lecture, 20-25 minutes