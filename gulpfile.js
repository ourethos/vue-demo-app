var gulp = require('gulp');
var browserify = require('browserify');
var partialify = require('partialify');
var coffeeify = require('coffeeify');
var through2 = require('through2');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var jsDevPath = './dev/assets/js/';
var jsMainDevFile = 'app.js';
var jsDistPath = './assets/js';
var jsMainDistFile = 'main.js';

gulp.task('browserify', function() {

  gulp.src(jsDevPath + jsMainDevFile)
    .pipe(through2.obj(function(file, enc, next) {
            browserify(file.path)
                .transform('partialify')
                .transform('coffeeify')
                .bundle(function(err, res) {
                    // assumes file.contents is a Buffer
                    file.contents = res;
                    next(null, file);
                });
        }))
    .pipe(uglify())
    .pipe(rename(jsMainDistFile))
    .pipe(gulp.dest(jsDistPath));
});



gulp.task('watch', function() {
    gulp.watch(jsDevPath + '**/*.*', ['browserify']);
});
