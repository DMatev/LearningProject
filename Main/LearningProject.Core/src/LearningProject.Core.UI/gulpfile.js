'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concant = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    config;

config = {
    sass: {
        srcPaths: './src/assets/sass/**/*.sccs',
        destinationPath: './dist/assets/css/'
    },
    js: {
        basePath: './src/app',
        srcPaths: [
            './src/app/*.js',
            './src/app/**/*.js'],
        destinationPath: './dist/app/'
    },
    cmJs: {
        srcPaths: './dist/app/**/*.js',
        destinationPath: './dist/app/',
        mapsPath: '../maps'
    },
    css: {
        srcPaths: './dist/assets/css/**/*.css',
        destinationPath: './dist/assets/css/'
    },
    cmCss: {
        srcPaths: './dist/assets/css/**/*.css',
        destinationPath: './dist/assets/css/',
        mapsPath: '../../maps'
    },
    libs: {
        srcPaths: [
            './bower_components/angular/angular.min.js',
            './bower_components/angular/angular.js',
            './bower_components/angular-loading-bar/build/loading-bar.min.js',
            './bower_components/angular-loading-bar/build/loading-bar.js',
            './bower_components/angular-loading-bar/build/loading-bar.min.css',
            './bower_components/angular-loading-bar/build/loading-bar.css',
            './bower_components/angular-route/angular-route.min.js',
            './bower_components/angular-route/angular-route.js',
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/bootstrap/dist/css/bootstrap.css'],
        srcDestinationPath: './src/libs/',
        distDestinationPath: './dist/libs/'
    },
    assets: {
        basePath: './src',
        srcPaths: './src/assets/img/*',
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

gulp.task('js', function () { // gulp-ng-annotate
    return gulp.src(config.js.srcPaths, { base: config.js.basePath })
        .pipe(ngAnnotate({remove: true,add: true, single_quotes: true}))
        .pipe(gulp.dest(config.js.destinationPath));
});

gulp.task('js-cm', function () {
    return gulp.src(config.cmJs.srcPaths)
        .pipe(sourcemaps.init())
        .pipe(concant('LearningProject.Core.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write(config.cmJs.mapsPath))
        .pipe(gulp.dest(config.cmJs.destinationPath));
});

gulp.task('css-cm', function () {
    return gulp.src(config.cmCss.srcPaths)
        .pipe(sourcemaps.init())
        .pipe(concant('LearningProject.Core.min.css'))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write(config.cmCss.mapsPath))
        .pipe(gulp.dest(config.cmCss.destinationPath));
});

gulp.task('copy-libs-src', function () {
    return gulp.src(config.libs.srcPaths)
        .pipe(gulp.dest(config.libs.srcDestinationPath));
});

gulp.task('copy-libs-dist', function () {
    return gulp.src(config.libs.srcPaths)
        .pipe(gulp.dest(config.libs.distDestinationPath));
});

gulp.task('copy-assets', function () {
    return gulp.src(config.assets.srcPaths, { base: config.assets.basePath })
        .pipe(gulp.dest(config.assets.destinationPath));
});

gulp.task('copy-html', function () { //use gulp-ng-html2js instead
    return gulp.src(config.html.srcPath, { base: config.html.basePath })
        .pipe(gulp.dest(config.html.destinationPath));
});

gulp.task('copy-app', function () {
    return gulp.src(config.srcPath, { base: config.basePath })
        .pipe(gulp.dest(config.destinationPath));
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

gulp.task('watch:js', function () {
    return watch(config.js.srcPaths, function () {
        gulp.start('js');
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

gulp.task('watch:browser-sync', function () {
    return watch(config.destinationPath, function () {
        browserSync.reload();
    });
});

gulp.task('watch', [
    'watch:sass',
    'watch:js',
    'watch:assets',
    'watch:html',
    'watch:app',
    'watch:browser-sync']
);

gulp.task('build', function () {
    runSequence('sass', 'js', 'copy-libs-src', 'copy-libs-dist', 'copy-assets', 'copy-html', 'copy-app');
});

gulp.task('default', function () {
    runSequence('browser-sync', 'watch');
});