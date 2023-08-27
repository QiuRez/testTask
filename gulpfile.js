const babel = require('gulp-babel');

var gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	sourcemaps = require('gulp-sourcemaps');
	php = require('gulp-connect-php');


gulp.task('autoprefixer', function() {
	return gulp.src('app/css/*.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('app/css'));
})



gulp.task('img', function() {
	return gulp.src("app/img/src/*")
	.pipe(imagemin())
	.pipe(gulp.dest("app/img/dist"))
	.pipe(browserSync.reload({stream: true}));
})

gulp.task('php', function() {
	return gulp.src('app/php/**/*.php')
	.pipe(browserSync.reload({stream: true}));
})

gulp.task('browser-sync', function() {
	php.server({base: '.'}, function() {
		browserSync.init({
			proxy: 'TZ',
			open: true,
			notify: false
		})
	})
})

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.+(scss|sass)')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(autoprefixer([
		">0.5%",
		"not dead",
		"Firefox ESR",
		"last 2 versions"]))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));
	})
	
	
gulp.task('html', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream: true}));
})


gulp.task('scripts', function() {
	return gulp.src([
		'app/js/**/*.js',
		'!app/js/app.js',
	])
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ["@babel/preset-env"]
	}))
	.pipe(concat('app.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
})


gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.+(scss|sass)', gulp.parallel('sass'));
	gulp.watch('app/img/src/*', gulp.parallel('img'));
	gulp.watch('app/*.html', gulp.parallel('html'));
	gulp.watch('app/js/main.js', gulp.parallel('scripts'));
})
gulp.task('default', gulp.parallel('browser-sync', 'autoprefixer', 'watch'));


// PROD

function build() {
	return gulp.src([
		'app/css/main.css',
		'app/fonts/**/*',
		'app/img/dist/**/*',
		'app/js/**/*.js',
		'app/libs/**/*',
		'app/**/*.html',
		'app/php/**/*.php',
	], { base: 'app' }).pipe(gulp.dest('dist'))
}

gulp.task('clean', function() {
	return gulp.src('dist', {allowEmpty: true}).pipe(clean());
})


gulp.task('build', gulp.series('clean', 'sass', 'autoprefixer', 'scripts', 'html', 'img', build));