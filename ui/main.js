var button = document.getElementById('countr');
var countr = 0;
button.onclick = function (){
    countr = countr + 1;
    var span = document.getElementById('count');
    span.innerHTML = countr.toString();
    
};