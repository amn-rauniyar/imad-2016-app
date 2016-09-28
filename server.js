var express = require('express');
var morgan = require('morgan');
var path = require('path');
var articles={
'articleone':{
    title:'Article-One',
    heading:'Article',
    time:'29th Seppt',
    content:`
    <p>
                    Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!
                </p>
                  <p>
                    Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!
                </p>
                
                  <p>
                    Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!
                </p>`
},
'articletwo':{
     title:'Article-Two',
    heading:'Article',
    time:'30th Seppt',
    content:`
    <p>
                    Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!
                </p>
                  <p>
                    Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!
                </p>
                
                  <p>
                    Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!! Welcome to page 2 hello how are you??!!
                </p>`
}
}
;
function createTemp(data){
 var title=data.title;
 var heading=data.heading;
 var time=data.time;
 var content=data.content;
    

var template=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="widtht=device-width, initial-scale-1" />
         <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            
            <div>
            <div>
                <a href="/">HOME</a>
            </div>
            <h3>
               ${heading}
            </h3>
            <div>
                ${time}
                ${time}
            </div>
                <div class="container">
               ${content}
                </div>
            </div>
        </body>

</html>
`;
return template;
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/:articlename', function (req, res){
    var articlename=req.params.articlename;
    res.send(createTemp(articles[articlename]));
    
});

var counter=0;
app.get('/counter', function (req,res){
    counter = counter + 1;
    res.send(counter.toString());
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
