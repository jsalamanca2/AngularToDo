angular
    .module('toDoApp', [
        //setting ui.router dependency
        'ui.router',
        //setting state dependencies to the main app module
        'toDoApp.complete',
        'toDoApp.list',
        'toDoApp.create'
    ]).config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}