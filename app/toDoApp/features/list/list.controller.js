angular
    .module('toDoApp.list')
    .controller('ListCtrl', ListCtrl)

function ListCtrl($http, $window) {
    let vm = this;

    vm.setComplete = function(id, boolean) {
        console.log(id, !boolean);
        $http.put('/api/todo', {id: id, boolean: !boolean})
            .then(function(response) {
                console.log(response);
                $window.location.reload();
            })
    }

    $http.get('/api/todos')
        .then(function(response) {
            vm.overdue = response.data.overdue;
            vm.due = response.data.due;
        })
}