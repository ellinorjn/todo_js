const createNewTodo = document.getElementById('createNewTodo');
const addNewTodo = document.getElementById('addNewTodo');
const todoContent = document.getElementById('todoContent');

addNewTodo.addEventListener('click', function(){
    console.log(createNewTodo.value);
});

