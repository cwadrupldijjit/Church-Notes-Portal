var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');

function tsServer() {
	gulp.src('./server/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			module: 'commonjs',
			target: 'ES5'
		}))
		.pipe(gulp.dest('./server'));
}

function tsPublic() {
	gulp.src('./public/js/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			target: 'ES5',
			outFile: 'app.js'
		}))
		.pipe(gulp.dest('./public/js'));
}

gulp.task('ts-server', tsServer);
gulp.task('ts-public', tsPublic);

gulp.task('watch', function() {
	watch('./server/**/*.ts', tsServer);
	watch('./ts/**/*.ts', tsPublic);
});

gulp.task('default', ['ts-server', 'ts-public', 'watch']);