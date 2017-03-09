
angular
    .module('toDoApp.create')
    .controller('CreateCtrl', CreateCtrl)

function CreateCtrl($http) {
    var vm = this;
    function init() {
        vm.data = {
            todo: '',
            completeDate: '',
            completeTime: ''
        }
    }
    vm.createToDo = function(){
        let date = vm.data.completeDate.split('-');
        let time = vm.data.completeTime.split(':');
        date = date.map((a,i) => { return i === 1 ? parseInt(a) - 1 : parseInt(a) });
        time = time.map((a) => { return parseInt(a) });
        let entry = {
            todo: vm.data.todo,
            completeBy: new Date(...date, ...time)
        }
        $http.post('/api/todo', entry)
        .then(function(response) {
            init();
            alert('Upload Succesful');
        });
    }
}