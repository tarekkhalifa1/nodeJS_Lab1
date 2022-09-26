var exp = require('express');
var app = exp();

app.get('/', function(req,res){
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(8080)