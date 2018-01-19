const gulp = require('gulp');
const sequence = require('gulp-sequence');

const defaultTask = function(cb) {
	sequence('html', 'include', 'css', 'js', 'images', 'watch', cb);
}

gulp.task('default', defaultTask);
module.exports = defaultTask;
