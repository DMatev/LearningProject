'use strict';

var exec = require('child_process').exec,
    fs = require('fs'),
    gulp = require('gulp'),
    nuget,
    nugetConfig,
    nugetRunner = require('nuget-runner'),
    path = require('path'),
    projects,
    rimraf = require('rimraf'),
    SQLConfig;

nugetConfig = {
    packageVersion: '1.0.0',
    nugetSource: 'http://localhost:88/nuget/LearningProject-NuGet',
    apiKey: 'WhiteHatHackers',
    nugetPath: path.join(__dirname, '../../../../Tools/nuget.exe')
};

projects = [
    'LearningProject.Core.Service',
    'LearningProject.Core.Abstraction',
    'LearningProject.Core.BusinessLogic',
    'LearningProject.Core.Domain',
    'LearningProject.Core.DTO',
    'LearningProject.Core.Shared'
];

nuget = nugetRunner({
    nugetPath: nugetConfig.nugetPath,
    apiKey: nugetConfig.apiKey,
    source: nugetConfig.nugetSource
});

SQLConfig = {
    server: '.\\sqlexpress',
    scriptsPath: path.join(__dirname, '..\\LearningProject.Core.Domain\\Scripts'),
    execScript: function (sqlFile) {
        return 'sqlcmd -S ' + this.server + ' -E -i ' + sqlFile;
    }
};

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

gulp.task('create-packages', function () {
    var command = 'dotnet pack ',
        i = -1;

    function createNugetPackage() {
        var projectPath;

        i++;
        projectPath = path.join(__dirname, '..\\' + projects[i]);

        if (i < (projects.length - 1)) {
            exec(command + projectPath, function (err, stdout, stderr) {
                if (err) {
                    console.log(err);
                }
                if (stderr) {
                    console.log(stderr);
                }
                console.log(stdout);
                createNugetPackage();
            });
        } else {
            exec(command + projectPath, function (err, stdout, stderr) {
                if (err) {
                    console.log(err);
                }
                if (stderr) {
                    console.log(stderr);
                }
                console.log(stdout);
            });
        }
    }

    createNugetPackage();
});

gulp.task('remove-nugetPackages', function () {
    projects.forEach(function (packageName) {
        nuget.delete(packageName, nugetConfig.packageVersion);
    });
});

gulp.task('upload-nugetPackages', function () {
    var i = -1;

    function pushNugetPackage() {
        var packagePath;

        i++;
        packagePath = path.join(__dirname, '..\\' + projects[i] + '\\bin\\Debug\\' + projects[i] + '.' + nugetConfig.packageVersion + '.symbols.nupkg');

        if (i < (projects.length - 1)) {
            nuget.push(packagePath).done(pushNugetPackage);
        } else {
            nuget.push(packagePath);
        }
    }

    pushNugetPackage();
});

gulp.task('initDB', function () {
    var sqlFile = path.join(SQLConfig.scriptsPath, '\\Init\\Core.Init.sql');

    exec(SQLConfig.execScript(sqlFile), function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        }
        if (stderr) {
            console.log(stderr);
        }
        console.log(stdout);
    });
});

gulp.task('createTables', function () {
    var sqlFile,
        sqlFilesPath = path.join(SQLConfig.scriptsPath, '\\Schemas');

    fs.readdir(sqlFilesPath, function (err, files) {
        if (err) {
            console.log(err);
            return;
        }
        files.forEach(function (file) {
            sqlFile = path.join(sqlFilesPath, file);
            exec(SQLConfig.execScript(sqlFile), function (err, stdout, stderr) {
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
        sqlFilesPath = path.join(SQLConfig.scriptsPath, '\\Data');

    fs.readdir(sqlFilesPath, function (err, files) {
        if (err) {
            console.log(err);
            return;
        }
        files.forEach(function (file) {
            sqlFile = path.join(sqlFilesPath, file);
            exec(SQLConfig.execScript(sqlFile), function (err, stdout, stderr) {
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

gulp.task('build', function () {
    var command = 'dotnet build';

    exec(command, function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        }
        if (stderr) {
            console.log(stderr);
        }
        if (err || stderr) {
            process.exit(1);
        }
        console.log(stdout);
    });
});