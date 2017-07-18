const gulp = require('gulp'),
    sass = require('gulp-sass'),
    // browserSync = require('browser-sync').create(),
    nodemon = require('gulp-nodemon'),
    // nodemon = require('nodemon'),
    runSequence = require('run-sequence'),
    livereload = require('gulp-livereload');

gulp.task('sass', () => {
    return gulp.src('./app/public/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/public/css'));
});

// gulp.task('browserSync', () => {
//     browserSync.init({
//         server: {
//             baseDir: './app'
//         }
//     });
// });

// gulp.task('nodemon', function() {
//     nodemon()
//     //     {
//     //   script: 'app.js'
//     // , ext: 'js html'
//     // , env: { 'NODE_ENV': 'development' }
//     // })
// });

gulp.task('watch', () => {
    // livereload.listen();
    gulp.watch('./app/public/scss/**/*.scss', ['sass']);
    // gulp.watch('./app/public/*.html', nodemon.emit('restart'));
    // gulp.watch('./app/public/scripts/**/*.js', nodemon.emit('restart'));
});

// gulp.task('default', () => {
//     runSequence(['sass', 'nodemon', 'watch']);
// });

gulp.task('default', ['watch'], () => {
    return nodemon(
        {
            script: './app/app.js',
            watch: './app/*'
        })
        .on('restart', function() {
            console.log('restarted');
        });
});
