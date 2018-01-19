const	concat = require('gulp-concat');
const config = require('../config');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const plumber = require('gulp-plumber');

const markdownConcatFooterTask = function() {
	gulp.src(config.markdown.concatFooter.src)
		.pipe(plumber())
		.pipe(concat(config.markdown.concatFooter.filename))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.markdown.concatFooter.dest))
}

gulp.task('markdown-concatFooter', markdownConcatFooterTask);
module.exports = markdownConcatFooterTask;
