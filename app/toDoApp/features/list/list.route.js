angular
    .module('toDoApp.list')
    .config(listConfig);

function listConfig($stateProvider) {

    $stateProvider.state({
        name: 'list',
        url: '/',
        templateUrl: '/toDoApp/features/list/list.html',
        controller: 'ListCtrl',
        controllerAs: 'ListVM'
    })
}