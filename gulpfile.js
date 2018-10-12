// including plugins
var gulp = require('gulp'),
    minifyCss = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

gulp.task('css', function () {
    gulp.src('assets/css/styles.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(minifyCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dest/css'))
        .pipe(livereload());
});

gulp.task('minify-css', function () {
    gulp.src('assets/css/*.css')
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

gulp.task('default', ['css', 'minify-js', 'fonts']);

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('assets/css/styles.css', ['css']);
    gulp.watch('assets/js/scripts.js', ['minify-js']);
});
