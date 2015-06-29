var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber');

var hintPath = [
    './client/app/scripts/**/*.js',
    '!./client/vendors/**/*'
];

gulp.task('jshint', function() {
    return gulp.src(hintPath)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default',{ verbose: true }));
});

gulp.task('watch-jshint', function() {
    gulp.watch(hintPath, ['jshint']);
});
