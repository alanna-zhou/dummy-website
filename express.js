var express = require('express');
var app = express();
app.use(express.static('public'));
const hostname = '127.0.0.1';
var appRoot = process.cwd();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res, next) {
    var action = req.query.action;
    console.log("request.headers.host: " + req.headers.host);
    if (action == 'setcookie') {
        const cookieKeyAndVal = hostname+'-FETCHED='+hostname+'-VALUE';
        res.setHeader('Set-Cookie', cookieKeyAndVal+ '; Path=/');
    }
 
    res.sendFile(appRoot + '/index.html');
});

app.get('/dummy', function(req, res, next) {
    res.json('dummy')
})

app.listen(3000, function() {
    console.log('listening on port 3000');
})
