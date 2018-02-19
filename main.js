const inputNewTodo = document.getElementById("inputNewTodo");
const buttonAddNewTodo = document.getElementById("buttonAddNewTodo");
const buttonDeleteAllTodos = document.getElementById('buttonDeleteAllTodos');

//creates a new li-element from the inputfield
function newListItem() {
    const li = document.createElement("li");
    const inputText = document.getElementById("inputNewTodo").value;
    const theTodo = document.createTextNode(inputText);
    li.appendChild(theTodo);
    //Checks if the inputfield is empty or not
    if (inputText === "") {
        alert("You can't add an empty todo, please write a todo");
    } else {
        document.getElementById("ulAllTodos").appendChild(li);
    }
}

//call newListItem function when clicking on the add todo button
buttonAddNewTodo.addEventListener('click', function(){
    newListItem();
})

/*Add an eventlistener to the delete button
and remove all the li's inside the ul when clicking*/ 
buttonDeleteAllTodos.addEventListener('click', function () {
    var todo = document.getElementById("ulAllTodos");
    while (todo.firstChild)todo.removeChild(todo.firstChild);
});



