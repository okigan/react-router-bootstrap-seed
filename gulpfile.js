var gulp = require('gulp'),
    reactify = require('gulp-reactify'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),

    babel = require('gulp-babel');

gulp.task('default', function () {
    gulp.src(['src/jsx/*.jsx', 'src/js/*.js'])
        .pipe(concat('bundle.jsx'))
        .pipe(babel())
        .pipe(reactify())
        .pipe(browserify())
//      .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

