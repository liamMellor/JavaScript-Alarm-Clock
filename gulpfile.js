var babel       = require('gulp-babel');
var sourcemaps  = require('gulp-sourcemaps');
var gulp        = require('gulp');
var srcPath     = 'src/**';
var buildPath   = 'build';

gulp.task('babel', function () {
    gulp.src([srcPath])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(buildPath));
});

gulp.task('watch', function() {
    gulp.watch(srcPath, ['babel']);
});

gulp.task('default', ['babel', 'watch']);
