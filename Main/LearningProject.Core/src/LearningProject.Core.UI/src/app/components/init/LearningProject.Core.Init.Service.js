(function (){
    'use strict';
    
    angular
        .module('LearningProject.Core.Init.Service', ['LearningProject.Core.Storage.Service', 'LearningProject.Core.Translate.Service'])
        .factory('LearningProject.Core.Init.Service', initService);

    initService.$inject = ['$q', 'LearningProject.Core.Storage.Service', 'LearningProject.Core.Translate.Service'];

    function initService($q, storageService, translateService){
        var initService = {
            run: run
        };

        return initService;

        function run(){
            var defer = $q.defer();
            storageService.get('rememberMe')
                .then(function (rememberMe){
                    if(rememberMe){
                        console.log('bla bla');
                    } else {
                         translateService
                            .init(1)
                            .then(function (){
                                console.log('language translation initiliazed');
                                defer.resolve();
                            })
                            .catch(function (){
                                console.log('error translation init');
                                defer.reject();
                            });
                    }
                })
                .catch(function (){
                           translateService
                            .init(1)
                            .then(function (){
                                console.log('language translation initiliazed');
                                defer.resolve();
                            })
                            .catch(function (){
                                console.log('error translation init');
                                defer.reject();
                            });
                });

            return defer.promise;

        }
    }

})();