var gulp       = require('gulp'),
    watch      = require('gulp-watch'),
    connect    = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber    = require('gulp-plumber'),
    CONFIG     = require('../config');

gulp.task('script', function () {
    return gulp.src(CONFIG.script.src, {
            base: CONFIG.work
        })
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(CONFIG.script.dest))
        .pipe(connect.reload());
});

gulp.task('watch-script', function () {
    watch(CONFIG.script.src, {
        base: CONFIG.work
    }, function () {
        gulp.start('script');
    });
});