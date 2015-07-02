var express = require("express"),
    app = express(),
    server;


app.disable('x-powered-by');

var data = {
    page: "Main page",
    content:"this is a home page"
};


app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});
//app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.render('main.jade', data);
});



server = app.listen(3000, function(){
    console.log("app ran on 3000 port");
});