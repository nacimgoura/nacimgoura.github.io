'use strict';

const gulp = require('gulp');
const purify = require('gulp-purifycss');
const cssnano = require('gulp-cssnano');

gulp.task('css', function() {
    return gulp.src('./public/css/*.css')
        .pipe(purify(['./index.html']))
        .pipe(cssnano({
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(gulp.dest('./dist/'));
});