(function () {
    'use strict';

    angular
        .module('LearningProject.Core.Module', [
            'angular-loading-bar',
            'LearningProject.Core.Init.Service',
            'LearningProject.Core.Routes'])
        .run(init);

    init.$inject = ['$q', 'LearningProject.Core.Init.Service'];

    function init($q, initService) {
        var defer = $q.defer();

        initService.run()
            .then(function (result) {
                console.log(result);
                defer.resolve();
            })
            .catch(function (err) {
                console.log(err);
                defer.reject();
            });

        return defer.promise;
    }
})();