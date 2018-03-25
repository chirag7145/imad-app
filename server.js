var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*var articles = {
  articleOne : {
    title: 'Article One',
    heading: 'Article-1',
    date: '5/4/30',
    content: `<div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>    
    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>    
    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>    
    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>`
},  
  articleTwo : {
    title: 'Article two',
    heading: 'Article-2',
    date: '9/4/20',
    content: `    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>    
    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>    
    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>    
    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>`
},  
  articleThree : {
    title: 'Article three',
    heading: 'Article-3',
    date: '7/9/20',
    content: `    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>    
    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>    
    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>    
    <div>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
        <p>Hello boys what's up !! Hello boys what's up !! Hello boys what's up ! Hello boys what's up !! Hello boys what's up !! Hello boys what's up !</p>
    </div>`
}
};
function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = 
`<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <h1>${heading}</h1>
        <span>
            <button><a href = "Article-2">Article-2</a></button>
            <button><a href = "Article-3">Article-3</a></button>
        </span>
        <hr>
        <h4>${date} </h4>
    ${content}
    </body>
</html>`;
}



app.get('/:articleName', function (req, res) {
    // articleName == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article_one.html'));
});

app.get('/article-2', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});

app.get('/article-3', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
