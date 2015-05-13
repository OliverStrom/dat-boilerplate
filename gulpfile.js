var gulp 				= require('gulp');
var sass 				= require('gulp-sass');
var browserSync = require('browser-sync').create();
var jshint 			= require('gulp-jshint');
var reload 			= browserSync.reload;
var browserify	= require('browserify');
var source 			= require('vinyl-source-stream');

// the mighty sass function
gulp.task('sass', function(){
	var config = {
		sass: { includePaths: [
	      			'src/bower_components/bourbon/app/assets/stylesheets',
	      			'src/bower_components/foundation/scss/foundation' ]
					},
		outputStyle: 'compressed'
	};

	gulp.src('src/scss/app.scss')
		.pipe(sass(config.sass))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('src/css/'))
		.pipe(reload({stream: true}));
});

// the helpful jshint to check our js syntax
gulp.task('jshint', function(){
	return gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));	
});

// the watchful watch function
gulp.task('watch', function(){

	// start bs
	browserSync.init({
    server: './src'
   });

	// watch stuff
	gulp.watch('src/js/*.js', ['browserify']); // watch js -> jshint
	gulp.watch('src/scss/*.scss', ['sass']); // watch src/*.scss -> sass
	gulp.watch('src/*.html').on('change', reload); // watch html files -> reload on chance
});

// browserify
gulp.task('browserify', function() {
  return browserify('src/js/base.js')
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('src/js'))
  .pipe(reload({stream: true}));
});

// default 'gulp'
gulp.task('default', ['sass', 'watch']);