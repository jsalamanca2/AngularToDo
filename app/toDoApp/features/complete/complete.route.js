angular
    .module('toDoApp.complete')
    .config(completeList);

function completeList($stateProvider) {
    $stateProvider.state({
        name: 'complete',
        url: '/complete',
        templateUrl: '/toDoApp/features/complete/complete.html',
        controller: 'CompleteCtrl',
        controllerAs: 'CompleteVM'

    })

}