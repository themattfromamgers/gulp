var gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
gulp.task('merhaba', function() {
	return gulp.src('./scss/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('./'))
})

gulp.task("izle", function(){
	gulp.watch('./scss/**/*.scss', ['merhaba'])
})

gulp.task('izle2', ['merhaba', 'izle'])