
angular
    .module('toDoApp.create')
    .config(createList);

function createList($stateProvider) {
    $stateProvider.state({
        name: 'create',
        url: '/create',
        templateUrl: '/todoApp/features/create/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'CreateVM'

    })

}