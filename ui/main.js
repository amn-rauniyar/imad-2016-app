console.log('Loaded!');
//change the text of main page
var element=document.getElementById('main-text');
element.innerHTML='New value';

//move image

var img=document.getElementById('madi');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft + 1;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveright,200);
};