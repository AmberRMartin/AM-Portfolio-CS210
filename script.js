const pencil = document.getElementById('pencil'); //get image
let toggle = true;

pencil.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle)
    {
        pencil.src = 'images/decor/pencil_1.png';
    }else{
        pencil.src = 'images/decor/pencil_2.png';
    }

});

const lay = document.getElementById('lay'); //get image
let toggle1 = true;

lay.addEventListener('click', function(){
    toggle1 = !toggle1;
    if(toggle1)
    {
        lay.src = 'images/decor/lay_1.png';
    }else{
        lay.src = 'images/decor/lay_2.png';
    }

});

const ded = document.getElementById('ded'); //get image
let toggle2 = true;

ded.addEventListener('click', function(){
    toggle2 = !toggle2;
    if(toggle2)
    {
        ded.src = 'images/decor/ded_1.png';
    }else{
        ded.src = 'images/decor/ded_2.png';
    }

});