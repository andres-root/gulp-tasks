var gulp = require('gulp');
var paths = require('../config.js').paths;

gulp.task('dev', ['browser-sync:dev', 'sass'], function() {
	gulp.watch(paths.base + '**/*.scss', ['sass']);
});