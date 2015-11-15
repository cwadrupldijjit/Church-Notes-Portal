var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');

gulp.task('ts-server', function() {
	gulp.src('./server/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			outFile: 'server.js'
		}))
		.pipe(gulp.dest('./server'));
});

gulp.task('ts-public', function() {
	gulp.src('./public/js/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			outFile: 'app.js'
		}))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
	watch('./ts/**/*.ts', function() {
		gulp.src('./ts/**/*.ts')
			.pipe(ts({
				noImplicitAny: true,
				outFile: 'app.js'
			}))
			.pipe(gulp.dest('./js'));
	});
});

gulp.task('default', ['ts', 'watch']);