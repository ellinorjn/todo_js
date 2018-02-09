const createNewTodo = document.getElementById('createNewTodo');
const containerForInputField = document.getElementById('containerForInputField');

createNewTodo.addEventListener('click', function(){
    const input = document.createElement('input')
    containerForInputField.appendChild(input);
})