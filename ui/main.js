console.log('Loaded!');
//change the text of main page
var element=document.getElementById('main-text');
element.innerHTML='New value';

//move image

var img=document.getElementById('madi');
img.onclick=function(){
    img.style.margin='100px';
};