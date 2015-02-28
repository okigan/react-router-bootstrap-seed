var gulp = require('gulp'),
    reactify = require('gulp-reactify'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    babel = require('gulp-babel'),
    server = require('gulp-server-livereload');

gulp.task('default', function () {
    gulp.src(['src/jsx/*.jsx', 'src/js/*.js'])
        .pipe(concat('bundle.jsx'))
        .pipe(babel())
        .pipe(reactify())
        .pipe(browserify())
//      .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', function () {
    gulp.src('.')
        .pipe(server({
            livereload: true,
            open: true
        }));
});
