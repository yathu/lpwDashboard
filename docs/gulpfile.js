var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function(done) {
    browserSync.init({
        server: {
            baseDir: '_site'
        }
    });
    done();
});

gulp.task('reload', function(done) {
    console.log("Files changed, reloading...");
    browserSync.reload();
    done();
});

gulp.task('watch', function() {
    gulp.watch('_site/**/*', gulp.series('reload')).on('change', function(path) {
        console.log(`File ${path} was changed`);
    });
});

gulp.task('default', gulp.series('browserSync', 'watch'));