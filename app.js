var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');


var fs = require('fs');
var data = JSON.parse(fs.readFileSync('file.json', 'utf8'));
var glass = JSON.parse(fs.readFileSync('glass.json', 'utf8'));
var acc = JSON.parse(fs.readFileSync('acc.json', 'utf8'));
var iron = JSON.parse(fs.readFileSync('iron.json', 'utf8'));
var glass1 = JSON.parse(fs.readFileSync('glass1.json', 'utf8'));
var perf = JSON.parse(fs.readFileSync('perf.json', 'utf8'));

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.get("/data", function(req, res){
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data ));

});

app.get("/perf", function(req, res){
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(perf ));

});

//data specific to glass
app.get("/glass", function(req, res){
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(glass));

});
//data specific to iron
app.get("/acc", function(req, res){
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(acc));

});
//data specific to iron
app.get("/iron", function(req, res){
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(iron));

});
//data specific to iron
app.get("/glass1", function(req, res){
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(glass1));

});
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(8080,function(){
           console.log("Server on");
           });

module.exports = app;
