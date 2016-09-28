console.log('Loaded!');
//change the text of main page
var element=document.getElementById('main-text');
element.innerHTML='New value';

//move image

var img=document.getElementById('madi');
function moveright(){
    var marginLeft=0;
    marginLeft=marginLeft+20;
    img.style.margin=marginLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveright,100);
};