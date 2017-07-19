const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    nodemon = require('gulp-nodemon');

gulp.task('sass', () => {
    return gulp.src('./app/public/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/public/css'))
    .pipe(reload({ stream : true }));
});

gulp.task('nodemon', (cb) => {
    let called = false;
    return nodemon({
        script: 'app/app.js',
        ignore: ['gulpfile.js', 'node_modules/']
    })
    .on('start', () => {
        if (!called) {
            called = true;
            cb();
        }
    })
    .on('restart', () => {
        setTimeout(() => {
            reload({ stream: false });
        }, 1000);
    });
});

gulp.task('browser-sync', ['sass', 'nodemon'], () => {
    browserSync({
        proxy: 'localhost:3000', // local node app address
        port: 5000, // use *different* port than above
        notify: false
    });
});

gulp.task('default', ['browser-sync'], () => {
    gulp.watch('app/public/*.html', reload);
    gulp.watch('app/public/scripts/*.js', reload);
    gulp.watch('app/public/scss/*.scss', ['sass']);
});
