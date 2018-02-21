const inputNewTodo = document.getElementById("inputNewTodo");
const buttonAddNewTodo = document.getElementById("buttonAddNewTodo");
const buttonDeleteAllTodos = document.getElementById('buttonDeleteAllTodos');

//creates a new li-element from the inputfield
function newListItem() {
    const li = document.createElement("li");
    li.className = "lista"
    const inputText = document.getElementById("inputNewTodo").value;
    const theTodo = document.createTextNode(inputText);
    /* FÖRSÖK TILL ANIMATION NYH 
    li.classList.add('fadeIn');*/
    li.appendChild(theTodo);
    //Checks if the inputfield is empty
    if (inputText === "") {
        alert("You can't add an empty todo, please write a todo");
    } else {
        document.getElementById("ulAllTodos").appendChild(li);
        deleteTodo(li)
        completeTodo(li)
    }
}

function deleteTodo(li) {
    const buttonDeleteTodo = document.createElement("button");
    buttonDeleteTodo.className = "buttonDeleteTodo"
    const textButtonDelete = document.createTextNode("Delete");
    buttonDeleteTodo.appendChild(textButtonDelete)
    li.appendChild(buttonDeleteTodo)
    //Gets my ul and removes the child when clicking on delete
    buttonDeleteTodo.addEventListener('click', function () {
        var removeTodo = document.getElementById('ulAllTodos')
        removeTodo.removeChild(li)
    });
}

function completeTodo(li) {
    const buttonCompletedTodo = document.createElement("button");
    buttonCompletedTodo.className = "buttonCompletedTodo"
    const textButtonCompleted = document.createTextNode("Completed!")
    buttonCompletedTodo.appendChild(textButtonCompleted)
    li.appendChild(buttonCompletedTodo)
    //
    const completed = document.getElementById('ulCompletedTodos')
    buttonCompletedTodo.addEventListener('click', function () {
        var removeTodo = document.getElementById('ulAllTodos')
        removeTodo.removeChild(li)
        //Removes the completed button when clicking on it
        li.removeChild(buttonCompletedTodo)
        //and then moves the todo to the completed list without the completed button
        completed.appendChild(li)
        })
    };

//call newListItem function when clicking on the add button
buttonAddNewTodo.addEventListener('click', newListItem);

inputNewTodo.addEventListener('keyup', function (e) {
    //Key code for enter === 13
    //If you press enter then the newListItem function will run
    if (e.keyCode === 13) {
        newListItem();
    }
});

/*Add an eventlistener to the delete button
and remove all the li's inside the ul when clicking*/
buttonDeleteAllTodos.addEventListener('click', function () {
    var todo = document.getElementById("ulAllTodos");
    while (todo.firstChild) todo.removeChild(todo.firstChild);
});