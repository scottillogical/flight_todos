'use strict';

var gulp = require('gulp');
var refresh = require('gulp-livereload');
var connect = require('gulp-connect');
var livereload = require('tiny-lr');
var server = livereload();

gulp.task('livereload-server', function () {
  server.listen(35729, function (err) {
    if (err) { return console.log(err); }
  });
});

gulp.task('css', function () {
  gulp.src('app/**/*.css').pipe(refresh(server));
});

gulp.task('js', function () {
  gulp.src('app/**/*.js').pipe(refresh(server));
});

gulp.task('default', function () {
  gulp.run('livereload-server');

  gulp.watch('app/**/*.css', function (event) {
    gulp.run('css');
  });

  gulp.watch('app/**/*.js', function (event) {
    gulp.run('js');
  });
});


//new stuff here

//gulp.task('server', function() {
  //var connect = require('connect');
  //var serveStatic = require('serve-static');
  //var send = require('send');
  //var fs = require('fs');

  //var app = connect()
    //.use(require('connect-livereload')({
      //port: 35729
    //}))
    //.use(serveStatic('app'))
    //.use(function(req, res) {
      //send(req, 'app/index.html').pipe(res);
    //});

  //var options = {
    //key: fs.readFileSync('certs/server.key'),
    //cert: fs.readFileSync('certs/server.crt'),
    //ca: fs.readFileSync('certs/ca.crt')
  //};

  //require('https').createServer(options, app)
    //.listen(3443)
    //.on('listening', function() {
      //console.log('Started connect web server on https://localhost:3443');
    //});
//});

