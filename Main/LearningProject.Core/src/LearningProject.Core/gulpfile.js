"use strict";

var exec = require('child_process').exec,
    fs = require('fs'),
    gulp = require('gulp'),
    nuget,
    nugetConfig,
    nugetRunner = require('nuget-runner'),
    path = require('path'),
    rimraf = require('rimraf'),
    runSequence = require('run-sequence'),
    SQLScriptsPath;

nugetConfig = {
    packageVersion: '1.0.0',
    nugetSource: 'http://localhost:88/nuget/LearningProject-NuGet',
    apiKey: 'WhiteHatHackers',
    nugetPath: 'D:\\LearningProject\\Tools\\nuget.exe',
    nugetPackages: [
        'LearningProject.Core',
        'LearningProject.Core.Abstraction',
        'LearningProject.Core.BusinessLogic',
        'LearningProject.Core.Domain',
        'LearningProject.Core.DTO'
    ],
    nugetPackagesPath: [
        'D:\\LearningProject\\Main\\LearningProject.Core\\artifacts\\bin\\LearningProject.Core\\Debug\\LearningProject.Core.1.0.0.symbols.nupkg',
        'D:\\LearningProject\\Main\\LearningProject.Core\\artifacts\\bin\\LearningProject.Core.Abstraction\\Debug\\LearningProject.Core.Abstraction.1.0.0.symbols.nupkg',
        'D:\\LearningProject\\Main\\LearningProject.Core\\artifacts\\bin\\LearningProject.Core.BusinessLogic\\Debug\\LearningProject.Core.BusinessLogic.1.0.0.symbols.nupkg',
        'D:\\LearningProject\\Main\\LearningProject.Core\\artifacts\\bin\\LearningProject.Core.Domain\\Debug\\LearningProject.Core.Domain.1.0.0.symbols.nupkg',
        'D:\\LearningProject\\Main\\LearningProject.Core\\artifacts\\bin\\LearningProject.Core.DTO\\Debug\\LearningProject.Core.DTO.1.0.0.symbols.nupkg'
    ]
};

nuget = nugetRunner({
    nugetPath: nugetConfig.nugetPath,
    apiKey: nugetConfig.apiKey,
    source: nugetConfig.nugetSource
});

SQLScriptsPath = path.join(__dirname, '..\\LearningProject.Core.Domain\\Scripts');

gulp.task('clear-cache', function () {
    var dnxPath = process.env.USERPROFILE + '\\.dnx\\packages\\LearningProject.Core';

    exec('dnu clear-http-cache', function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        }
        if (stderr) {
            console.log(stderr);
        }
    });
    rimraf(dnxPath, function () {
        rimraf(dnxPath + '.*', function () {
            console.log('cache cleaned');
        });
    });
});

gulp.task('remove-nugetPackages', function () {
    nugetConfig.nugetPackages.forEach(function (packageName) {
        nuget.delete(packageName, nugetConfig.packageVersion);
    });
});

gulp.task('upload-nugetPackages', function () {
    var i = -1;

    function pushNugetPackage() {
        i++;
        if (i < (nugetConfig.nugetPackagesPath.length - 1)) {
            nuget.push(nugetConfig.nugetPackagesPath[i]).done(pushNugetPackage)
        } else {
            nuget.push(nugetConfig.nugetPackagesPath[i]);
        }
    }

    pushNugetPackage();
});

gulp.task('refresh-nugetPackages', function () {
    runSequence(['remove-nugetPackages', 'upload-nugetPackages']);
});

gulp.task('dropDB', function () {
    var sqlFile = path.join(SQLScriptsPath, '\\Init\\Core.Init_dropDb.sql');
    exec('sqlcmd -i ' + sqlFile, function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        }
        if (stderr) {
            console.log(stderr);
        }
        console.log(stdout);
        console.log('Database dropped');
    });
});

gulp.task('createDB', function () {
    var sqlFile = path.join(SQLScriptsPath, '\\Init\\Core.Init_createDb.sql');
    exec('sqlcmd -i ' + sqlFile, function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        }
        if (stderr) {
            console.log(stderr);
        }
        console.log(stdout);
        console.log('Database created');
    });
});

gulp.task('createSchema', function () {
    var sqlFile = path.join(SQLScriptsPath, '\\Init\\Core.Init_schema.sql');
    exec('sqlcmd -i ' + sqlFile, function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        }
        if (stderr) {
            console.log(stderr);
        }
        console.log(stdout);
        console.log('Schema created');
    });
});

gulp.task('createTables', function () {
    var sqlFile,
        sqlFilesPath = path.join(SQLScriptsPath, '\\Schemas');

    fs.readdir(sqlFilesPath, function (err, files) {
        if (err) {
            console.log(err);
            return;
        }
        files.forEach(function (file) {
            sqlFile = path.join(sqlFilesPath, file);
            exec('sqlcmd -i ' + sqlFile, function (err, stdout, stderr) {
                if (err) {
                    console.log(err);
                }
                if (stderr) {
                    console.log(stderr);
                }
                console.log(stdout);
            });
        });
    });
});

gulp.task('fillTables', function () {
    var sqlFile,
        sqlFilesPath = path.join(SQLScriptsPath, '\\Data');

    fs.readdir(sqlFilesPath, function (err, files) {
        if (err) {
            console.log(err);
            return;
        }
        files.forEach(function (file) {
            sqlFile = path.join(sqlFilesPath, file);
            exec('sqlcmd -i ' + sqlFile, function (err, stdout, stderr) {
                if (err) {
                    console.log(err);
                }
                if (stderr) {
                    console.log(stderr);
                }
                console.log(stdout);
            });
        });
    });
});