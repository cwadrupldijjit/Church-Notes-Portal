/// <reference path="./typings/gulp.d.ts" />

let gulp = require('gulp');
let ts = require('gulp-typescript');
let sass = require('gulp-sass');
let change = require('gulp-changed');
let sourcemaps = require('gulp-sourcemaps');
let watch = require('gulp-watch');

let pathToServerTs = ['./server/**/*.ts'];
let pathToPublicTs = ['./src/**/*.ts'];
let pathToSass = ['./src/**/*.scss'];
let pathToAssets = ['!' + pathToSass[0], '!' + pathToPublicTs[0], './src/**/*']

let pathToServer = './server';
let pathToPublic = './public';

function tsServer() {
	gulp.src(pathToServerTs)
		.pipe(change(pathToServer))
		.pipe(sourcemaps.init())
			.pipe(ts({
				noImplicitAny: false,
				module: 'commonjs',
				target: 'ES6'
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(pathToServer));
}

function tsPublic() {
	gulp.src(pathToPublicTs)
		.pipe(change(pathToPublic))
		.pipe(sourcemaps.init())
			.pipe(ts({
				noImplicitAny: false,
				target: 'ES6',
				experimentalDecorators: true,
				emitDecoratorMetadata: true,
				noLib: true
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(pathToPublic));
}

function sassCompile() {
	gulp.src(pathToSass)
		.pipe(change(pathToPublic))
		.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(pathToPublic));
}

function copyAssets() {
	gulp.src(pathToAssets)
		.pipe(change(pathToPublic))
		.pipe(gulp.dest(pathToPublic));
}

gulp.task('ts-server', tsServer);
gulp.task('ts-public', tsPublic);
gulp.task('sass', sassCompile);
gulp.task('copy', copyAssets);

gulp.task('watch', function() {
	watch(pathToServerTs, tsServer);
	watch(pathToPublicTs, tsPublic);
	watch(pathToSass, sassCompile);
	watch(pathToAssets, copyAssets);
});

gulp.task('default', ['sass', 'ts-server', 'ts-public', 'copy', 'watch']);