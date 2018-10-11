// including plugins
var gulp = require('gulp'),
    minifyCss = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('autoprefixer', function () {
    var autoprefixer = require('autoprefixer');
    return gulp.src('assets/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('minify-css', function () {
    gulp.src('assets/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./dest/css'));
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

gulp.task('default', ['autoprefixer', 'minify-css', 'minify-js']);




