const inputNewTodo = document.getElementById('inputNewTodo');
const buttonAddNewTodo = document.getElementById ('buttonAddNewTodo');
const buttonDeleteAllTodos = document.getElementById('buttonDeleteAllTodos');

//Add an eventlistener to the adding button
buttonAddNewTodo.addEventListener('click', function () {
    //Create li-element and add the inputvalue to the li-element
    const li = document.createElement("li");
    const inputText = document.getElementById("inputNewTodo").value;
    const theTodo = document.createTextNode(inputText);
    if (inputText === "") {
        alert("You can't add an empty todo, please write a todo");
    } else {
        li.appendChild(theTodo);
        document.getElementById("ulAllTodos").appendChild(li);
    }
});


//Add an eventlistener to the delete button
//and remove all the li's inside the ul when clicking 
buttonDeleteAllTodos.addEventListener('click', function () {
    var todo = document.getElementById("ulAllTodos");
    while (todo.firstChild)todo.removeChild(todo.firstChild);
});
