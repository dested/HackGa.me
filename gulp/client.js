var gulp = require('gulp');


var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var insert = require('gulp-insert');

var codePaths = ['HackGame.Client/bin/debug/**/*.js'];
var uiPaths = ['HackGame.Client/Partials/Areas/**/*.*'];
var directivePaths = ['HackGame.Client/Partials/Directives/**/*.*'];


gulp.task('client.packageScripts', function () {
    return gulp.src(codePaths)
        .pipe(gulp.dest('output/js'));
});



gulp.task('client.packageViews', function () {
    return gulp.src(uiPaths)
        .pipe(gulp.dest('output/partials/UIs'));
});
gulp.task('client.packageDirectives', function () {
    return gulp.src(directivePaths)
        .pipe(gulp.dest('output/partials'));
});


gulp.task('client.express', function () {
    console.log(process.cwd())
    var express = require('express');
    var http = require('http');
    var app = express();
    app.set('port', 3000);
    app.use(express.static('output'));

     

    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});