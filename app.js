var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const util = require('util');
var request = require('request');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//tianditu proxy
app.use('/tdt', function (req, res) {
    if (req.query.request === 'GetTile' || req.query.REQUEST === 'GetTile') {
        var url = util.format('http://t3.tianditu.cn/vec_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=c&TileMatrix=%i&TileRow=%i&TileCol=%i&style=default&format=tiles', req.query.TILEMATRIX, req.query.TILEROW, req.query.TILECOL);
        var options = {
            url: url,
            rejectUnauthorized: false
        };
        req.pipe(request(url)).pipe(res);
    }
    else {
        res.sendFile('mytdt.xml', { root: path.join(__dirname, 'public')});
    }
});


//tianditu proxy
app.use('/img', function (req, res) {
    if (req.query.request === 'GetTile' || req.query.REQUEST === 'GetTile') {
        //var url = util.format('http://t3.tianditu.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=c&TileMatrix=%i&TileRow=%i&TileCol=%i&style=default&format=tiles', req.query.TILEMATRIX, req.query.TILEROW, req.query.TILECOL);
        var url = util.format('http://t1.tianditu.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=c&TileMatrix=%i&TileRow=%i&TileCol=%i&style=default&format=tiles', req.query.TILEMATRIX, req.query.TILEROW, req.query.TILECOL);
        var options = {
            url: url,
            rejectUnauthorized: false
        };
        req.pipe(request(url)).pipe(res);
    }
    else {
        res.sendFile('myimg.xml', { root: path.join(__dirname, 'public')});
    }
});

app.use('/cva', function (req, res) {
    if (req.query.request === 'GetTile' || req.query.REQUEST === 'GetTile') {
        //var url = util.format('http://t3.tianditu.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=c&TileMatrix=%i&TileRow=%i&TileCol=%i&style=default&format=tiles', req.query.TILEMATRIX, req.query.TILEROW, req.query.TILECOL);
        var url = util.format('http://t1.tianditu.cn/cva_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=c&TileMatrix=%i&TileRow=%i&TileCol=%i&style=default&format=tiles', req.query.TILEMATRIX, req.query.TILEROW, req.query.TILECOL);
        var options = {
            url: url,
            rejectUnauthorized: false
        };
        req.pipe(request(url)).pipe(res);
    }
    else {
        res.sendFile('mycva.xml', { root: path.join(__dirname, 'public')});
    }
});
//app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// 定制开发的后台接口
var deployMap = require('./routes/users');
app.use('/deployMap', deployMap);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
