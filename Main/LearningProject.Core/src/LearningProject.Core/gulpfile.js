/// <binding Clean='clean' />
"use strict";

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    rimraf = require('rimraf'),
    Nuget = require('nuget-runner'),
    Q = require('q'),
    config,
    nuget;

config = {
    packageVersion: '1.0.0',
    nugetSource: 'http://localhost/nuget/LearningProject-NuGet',
    apiKey: 'WhiteHatHackers',
    nugetPath: 'D:\\LearningProject\\Tools\\nuget.exe',
    nugetPackages: [
        'LearningProject.Core',
        'LearningProject.Core.BusinessLogic',
        'LearningProject.Core.Domain',
        'LearningProject.Core.Service'
    ],
    nugetPackagesPath: [
        'D:\\LearningProject\\Main\\LearningProject.Core\\artifacts\\bin\\LearningProject.Core\\Debug\\LearningProject.Core.1.0.0.symbols.nupkg',
        'D:\\LearningProject\\Main\\LearningProject.Core\\artifacts\\bin\\LearningProject.Core.BusinessLogic\\Debug\\LearningProject.Core.BusinessLogic.1.0.0.symbols.nupkg',
        'D:\\LearningProject\\Main\\LearningProject.Core\\artifacts\\bin\\LearningProject.Core.Domain\\Debug\\LearningProject.Core.Domain.1.0.0.symbols.nupkg',
        'D:\\LearningProject\\Main\\LearningProject.Core\\artifacts\\bin\\LearningProject.Core.Service\\Debug\\LearningProject.Core.Service.1.0.0.symbols.nupkg'
    ]
};

nuget = Nuget({
    nugetPath: config.nugetPath,
    apiKey: config.apiKey,
    source: config.nugetSource
});

gulp.task('clear-cache', function () {
    var dnxPath = process.env.USERPROFILE + '\\.dnx\\packages\\LearningProject.Core';

    shell.task(['dnu clear-http-cache']);
    rimraf(dnxPath, function () {
        rimraf(dnxPath + '.*', function () {
            console.log('cache cleaned');
        });
    });
});

gulp.task('remove-nugetPackages', function () {
    config.nugetPackages.forEach(function (packageName) {
        nuget.delete(packageName, config.packageVersion);
    });
});

gulp.task('upload-nugetPackages', function () {
    var i = -1;

    function pushNugetPackage() {
        i++;
        if (i < (config.nugetPackagesPath.length - 1)) {
            nuget.push(config.nugetPackagesPath[i]).done(pushNugetPackage)
        } else {
            nuget.push(config.nugetPackagesPath[i]);
        }
    }

    pushNugetPackage();
});