var OPTIMIZE_IMAGES = true;

var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		autoprefixer   = require('gulp-autoprefixer'),
		notify         = require("gulp-notify");
    image          = require('gulp-image'),

// Сервер и автообновление страницы Browsersync
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

//Dev

gulp.task('sass', function() {
  return gulp.src('app/sass/**/*.scss')
  .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
  .pipe(rename({suffix: '.min', prefix : ''}))
  .pipe(autoprefixer(['last 15 versions']))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
	return gulp.src([
		// 'app/libs/jquery/dist/jquery.min.js',
		'app/js/common.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('dev', ['sass', 'js', 'watch']);

// PRODUCTION

gulp.task('minify-css', function() {
  return gulp.src('app/sass/**/*.scss')
  .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
  .pipe(rename({suffix: '.min', prefix : ''}))
  .pipe(autoprefixer(['last 15 versions']))
  .pipe(cleanCSS()) // Опционально, закомментировать при отладке
  .pipe(gulp.dest('app/css'))
});

gulp.task('minify-js', function() {
  return gulp.src([
    // 'app/libs/jquery/dist/jquery.min.js',
    'app/js/common.js', // Всегда в конце
    ])
  .pipe(concat('scripts.min.js'))
  .pipe(uglify()) // Минимизировать весь js (на выбор)
  .pipe(gulp.dest('app/js'))
});

gulp.task('optimize-images', function () {
  gulp.src('app/img/*')
    .pipe(image({
        pngquant: false,
        jpegRecompress: ['--quality', 'high'],
        mozjpeg: ['-optimize', '-progressive'],
        guetzli: false,
        svgo: ['--disable', 'removeViewBox']
     }))
    .pipe(gulp.dest('app/img/'));
});

var prodTasks = ['minify-css', 'minify-js'];

if (OPTIMIZE_IMAGES) {
  prodTasks.push('optimize-images');
}

gulp.task('prod', prodTasks);