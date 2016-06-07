var gulp = require('gulp'); 
//var scssPlugin = require('gulp-sass');
var connect = require('gulp-connect');
 
gulp.task('reload', function () {
    gulp.src('')
        //.pipe(scssPlugin())
        //.pipe(gulp.dest(''))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        port: 8000,
        livereload: true
    });
});

gulp.task('watchMyStyles', function() {
    gulp.watch(['index.html','js/*.js', 'css/*.css'], ['reload']);
});

gulp.task('watch', ['watchMyStyles', 'connect']);
gulp.task('default', ['watchMyStyles', 'connect']);
