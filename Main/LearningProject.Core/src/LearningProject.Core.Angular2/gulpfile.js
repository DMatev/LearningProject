'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    config;

config = {
    sass: {
        srcPaths: './src/assets/sass/**/*.sccs',
        destinationPath: './dist/assets/css/'
    },
    static: {
        basePath: './src',
        srcPaths: ['./src/assets/img/*', './src/index.html', './src/systemjs.config.js',],
        destinationPath: './dist/'
    },
    basePath: './dist',
    srcPath: ['./dist/app/**', './dist/assets/**', './dist/index.html', './dist/package.json', './dist/systemjs.config.js'],
    destinationPath: '../LearningProject.Core.WebApp/wwwroot/'
};


gulp.task('sass', function () {
    return gulp.src(config.sass.srcPaths)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.sass.destinationPath));
});

gulp.task('copy-static', function () {
    return gulp.src(config.static.srcPaths, { base: config.static.basePath })
        .pipe(gulp.dest(config.static.destinationPath));
});

gulp.task('copy-app', function () {
    return gulp.src(config.srcPath, { base: config.basePath })
        .pipe(gulp.dest(config.destinationPath))
        .on('finish', function () {
            browserSync.reload();
        });
});

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "http://localhost:5000/",
        port: 1337
    });
});

gulp.task('watch:sass', function () {
    return watch(config.sass.srcPaths, function () {
        gulp.start('sass');
    });
});

gulp.task('watch:static', function () {
    return watch(config.static.srcPaths, function () {
        gulp.start('copy-static');
    });
});

gulp.task('watch:app', function () {
    return watch(config.srcPath, function () {
        gulp.start('copy-app');
    });
});

gulp.task('watch', [
    'watch:sass',
    'watch:static',
    'watch:app'
    ]
);

gulp.task('default', function () {
    runSequence('browser-sync', 'watch');
});