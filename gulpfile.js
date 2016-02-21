var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

var pathToServerTs = './server/**/*.ts';
var pathToPublicTs = ['./public/js/**/*.ts', './public/views/**/*.ts'];
var pathToSass = ['./public/css/**/*.scss', '.public/views/**/*.scss'];

function tsServer() {
	gulp.src(pathToServerTs)
		.pipe(sourcemaps.init())
			.pipe(ts({
				noImplicitAny: false,
				module: 'commonjs',
				target: 'ES5'
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./server'));
}

function tsPublic() {
	gulp.src(pathToPublicTs)
		.pipe(sourcemaps.init())
			.pipe(ts({
				noImplicitAny: false,
				target: 'ES5',
				outFile: 'app.js'
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/js'));
}

function sassCompile() {
	gulp.src(pathToSass)
		.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public'));
}

gulp.task('ts-server', tsServer);
gulp.task('ts-public', tsPublic);

gulp.task('watch', function() {
	watch(pathToServerTs, tsServer);
	watch(pathToPublicTs, tsPublic);
	watch(pathToSass, sassCompile);
});

gulp.task('default', ['ts-server', 'ts-public', 'watch']);