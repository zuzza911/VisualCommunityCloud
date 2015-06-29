var gulp = require('gulp');

require('./gulp_tasks/jshint');
require('./gulp_tasks/server');

gulp.task('default', function () {
    gulp.start(
        'jshint',
        'server',
        'watch-jshint');
});

gulp.task('test', function () {
    gulp.start(
        'jshint');
});
