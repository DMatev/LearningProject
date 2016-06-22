'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concant = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    config;

config = {
    sass: {
        srcPaths: [
            './src/assets/sass/*.sccs',
            './src/assets/sass/**/*.sccs'],
        destinationPath: './src/assets/css/'
    },
    js: {
        srcPaths: [
            './src/app/*.js',
            './src/app/**/*.js'],
        destinationPath: './dist/app/'
    },
    css: {
        srcPaths: [
            './src/assets/css/*.css',
            './src/assets/css/**/*.css'],
        destinationPath: './dist/assets/css/'
    },
    libs: {
        srcPaths: [
            './bower_components/angular/angular.min.js',
            './bower_components/angular-loading-bar/build/loading-bar.min.js',
            './bower_components/angular-loading-bar/build/loading-bar.min.css',
            './bower_components/angular-route/angular-route.min.js',
            './bower_components/bootstrap/dist/css/bootstrap.min.css'],
        destinationPath: './src/assets/libs/'
    },
    assets: {
        basePath: './src',
        srcPaths: [
            './src/assets/libs/*',
            './src/assets/img/*'],
        destinationPath: './dist/'
    },
    html: {
        basePath: './src',
        srcPath: './src/**/*.html',
        destinationPath: './dist/'
    },
    basePath: './dist',
    srcPath: './dist/**',
    destinationPath: '../LearningProject.Core.WebApp/wwwroot/'
};

gulp.task('sass', function () {
    return gulp.src(config.sass.srcPaths)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.sass.destinationPath));
});

gulp.task('js-cm', function () {
    return gulp.src(config.js.srcPaths)
        .pipe(sourcemaps.init())
        .pipe(concant('LearningProject.Core.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(config.js.destinationPath));
});

gulp.task('css-cm', function () {
    return gulp.src(config.css.srcPaths)
        .pipe(concant('LearningProject.Core.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.css.destinationPath));
});

gulp.task('copy-libs', function () {
    return gulp.src(config.libs.srcPaths)
        .pipe(gulp.dest(config.libs.destinationPath));
});

gulp.task('copy-assets', function () {
    return gulp.src(config.assets.srcPaths, { base: config.assets.basePath })
        .pipe(gulp.dest(config.assets.destinationPath));
});

gulp.task('copy-html', function () {
    return gulp.src(config.html.srcPath, { base: config.html.basePath })
        .pipe(gulp.dest(config.html.destinationPath));
});

gulp.task('copy-app', function () {
    return gulp.src(config.srcPath, { base: config.basePath })
        .pipe(gulp.dest(config.destinationPath));
});

gulp.task('watch:sass', function () {
    return watch(config.sass.srcPaths, function () {
        gulp.start('sass');
    });
});

gulp.task('watch:css', function () {
    return watch(config.css.srcPaths, function () {
        gulp.start('css-cm');
    });
});

gulp.task('watch:js', function () {
    return watch(config.js.srcPaths, function () {
        gulp.start('js-cm');
    });
});

gulp.task('watch:assets', function () {
    return watch(config.assets.srcPaths, function () {
        gulp.start('copy-assets');
    });
});

gulp.task('watch:html', function () {
    return watch(config.html.srcPath, function () {
        gulp.start('copy-html');
    });
});

gulp.task('watch:app', function () {
    return watch(config.srcPath, function () {
        gulp.start('copy-app');
    });
});

gulp.task('watch', [
    'watch:sass',
    'watch:css',
    'watch:js',
    'watch:assets',
    'watch:html',
    'watch:app']
);