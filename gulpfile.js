// required NPM package

var gulp 		 = require('gulp');
var sass 		 = require('gulp-sass');
var clean 		 = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');

// 1. compiling the SCSS to CSS

const sassCompile = (done) => {
	gulp.src('css/prod/style.scss')
		.pipe(sass({
			includePaths: ['./css/prod/_sass'],
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			
			grid: true
		}))
		.pipe(gulp.dest('css/dist'));
	done();
}

gulp.task('sass:compile', sassCompile);

// 2. watch the code for changes

gulp.task('sass:watch', () => {
	return gulp.watch('css/prod/**/*.scss', sassCompile)
});

// 3. cleaning out the files

const sassClean = (done) => {
	gulp.src('../dist/style.scss', { allowEmpty: true })
		.pipe(clean());
	done();
}

gulp.task('sass:clean', sassClean);

// ***

// final task
gulp.task('sass', gulp.series('sass:clean', 'sass:compile', 'sass:watch'));