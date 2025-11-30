const img = document.getElementById('images'); //get image
let toggle = true;

img.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle)
    {
        img.src = 'images/decor/pencil_1.png';
    }else{
        img.src = 'images/decor/pencil_2.png';
    }

});