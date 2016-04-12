var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	plumber = require('gulp-plumber');

// Scripts Task
gulp.task('scripts', function(){
	//gulp.src(['src/js/**/*.js', '!src/js/config.js'])
	gulp.src(['src/js/**/*.js'])
		.pipe(plumber())
		.pipe(concat('emoji.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
	gulp.src(['src/js/config.js'])
		.pipe(plumber())
		.pipe(concat('config.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Styles Task
gulp.task('styles', function () {
	return gulp.src(['src/**/*.css', '!src/**/style.css'])
		.pipe(cssmin())
		.pipe(concat('emoji.min.css'))
		.pipe(gulp.dest('dist/css'));
});

//  Watch Task
//  Watches JS
gulp.task('watch', function(){
	gulp.watch('src/**/*.js', ['scripts']);
	gulp.watch('src/**/*.css', ['styles']);
	gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);