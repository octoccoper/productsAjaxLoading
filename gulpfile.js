// including plugins
var gulp = require('gulp'),
    minifyCss = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('autoprefixer', function () {
    var autoprefixer = require('gulp-autoprefixer');
    gulp.src('assets/css/styles.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dest/css'))
});

gulp.task('minify-css', function () {
    gulp.src('assets/css/styles.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dest/css'));
});

gulp.task('minify-js', function () {
    gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'));
});

gulp.task('fonts', function () {
    return gulp.src('assets/webfonts/**/*')
        .pipe(gulp.dest('dest/webfonts'))
});

gulp.task('default', ['autoprefixer', 'minify-js', 'fonts']);

gulp.task('watch', function () {
    gulp.watch('*.js, *.css', ['autoprefixer', 'minify-js']);
});
