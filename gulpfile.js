var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// ***

sassClean = (done) => {
	gulp.src('../dist/style.scss', { allowEmpty: true })
		.pipe(clean());
	done();
}

gulp.task('sass:clean', sassClean);