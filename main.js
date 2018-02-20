const inputNewTodo = document.getElementById("inputNewTodo");
const buttonAddNewTodo = document.getElementById("buttonAddNewTodo");
const buttonDeleteAllTodos = document.getElementById('buttonDeleteAllTodos');

//creates a new li-element from the inputfield
function newListItem() {
    //Checks if the inputfield is empty
    if (inputNewTodo === "") {
        alert("You can't add an empty todo, please write a todo");
    } else {
        const li = document.createElement("li");
        li.className = "lista"
        const inputText = document.getElementById("inputNewTodo").value;
        const theTodo = document.createTextNode(inputText);
        li.appendChild(theTodo);
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
function completeTodo(li){
     const buttonCompletedTodo = document.createElement("button");
        buttonCompletedTodo.className = "buttonCompletedTodo"
        const textButtonCompleted = document.createTextNode("Completed!")
        buttonCompletedTodo.appendChild(textButtonCompleted)
        li.appendChild(buttonCompletedTodo)
}



//call newListItem function when clicking on the add button
buttonAddNewTodo.addEventListener('click', function(){
    newListItem();
})

/*Add an eventlistener to the delete button
and remove all the li's inside the ul when clicking*/ 
buttonDeleteAllTodos.addEventListener('click', function () {
    var todo = document.getElementById("ulAllTodos");
    while (todo.firstChild)todo.removeChild(todo.firstChild);
});



