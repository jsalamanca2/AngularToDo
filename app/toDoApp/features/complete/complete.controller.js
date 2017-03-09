angular
    .module('toDoApp.complete')
    .controller('CompleteCtrl', CompleteCtrl)

function CompleteCtrl($http, $window) {
    let vm = this;

    vm.setComplete = function(id, boolean) {
        console.log(id, !boolean);
        $http.put('/api/todo', {id: id, boolean: !boolean})
            .then(function(response) {
                $window.location.reload();
            })
    }

    $http.get('/api/todos')
        .then(function(response) {
            vm.completed = response.data.completed;
        })
}