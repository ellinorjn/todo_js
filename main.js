const inputNewTodo = document.getElementById("inputNewTodo");
const buttonAddNewTodo = document.getElementById("buttonAddNewTodo");
const buttonDeleteAllTodos = document.getElementById('buttonDeleteAllTodos');

//creates a new li-element from the inputfield
function newListItem() {
    const li = document.createElement("li");
    const inputText = document.getElementById("inputNewTodo").value;
    const theTodo = document.createTextNode(inputText);
    // Animation
    li.classList.add('fadeTodoIn');
    li.appendChild(theTodo);
    //Checks if the inputfield is empty
    if (inputText === "") {
        alert("You can't add an empty todo, please write a todo");
    }else {
        document.getElementById("ulAllTodos").appendChild(li);
        deleteTodo(li)
        completeTodo(li)
    }
        inputNewTodo.value=""
}

function deleteTodo(li) {
    const buttonDeleteTodo = document.createElement("button");
    buttonDeleteTodo.className = "buttonDeleteTodo"
    const textButtonDelete = document.createTextNode("Delete");
    buttonDeleteTodo.appendChild(textButtonDelete)
    li.appendChild(buttonDeleteTodo)
    //Get the parent node of the button === li
    buttonDeleteTodo.addEventListener('click', function () {
        const listItem = this.parentNode;
        //Animate the todo when clicking on delete
        li.classList.add('fadeOutDeletedTodo')
        setTimeout(function () {
            (listItem.parentElement.removeChild(listItem));
        }, 300);
    });
};

function completeTodo(li) {
    //Create a new button so you can mark a todo as completed
    const buttonCompletedTodo = document.createElement("button");
    buttonCompletedTodo.className = "buttonCompletedTodo"
    const textButtonCompleted = document.createTextNode("Completed!")
    buttonCompletedTodo.appendChild(textButtonCompleted)
    li.appendChild(buttonCompletedTodo)
    const completed = document.getElementById('ulCompletedTodos')
    buttonCompletedTodo.addEventListener('click', function () {
        //only show the completed list if there's any completed todos to list
        const div = document.getElementById("completedTodos")
        div.style.display="block";
        var removeTodo = document.getElementById('ulAllTodos')
        removeTodo.removeChild(li)
        //Removes the completed button when clicking on it
        li.removeChild(buttonCompletedTodo)
        //and then moves the todo to the completed list without the completed button
        completed.appendChild(li)
        })
    };

/*call newListItem function when clicking on the add button
so we can see the todo*/
buttonAddNewTodo.addEventListener('click', function(){
    newListItem();
});

inputNewTodo.addEventListener('keyup', function (e) {
    /*Key code for enter === 13
    If you press enter then the newListItem function will run*/
    if (e.keyCode === 13) {
        newListItem();
    }
});

/*Add an eventlistener to the delete button
and remove all the li's inside the ul when clicking*/
buttonDeleteAllTodos.addEventListener('click', function () {
    var todo = document.getElementById("ulAllTodos");
    var completedTodo = document.getElementById("ulCompletedTodos");
    todo.classList.add('fadeOutDeletedTodo')
    completedTodo.classList.add('fadeOutDeletedTodo')
    setTimeout(function () {
        while (todo.firstChild) todo.removeChild(todo.firstChild);
    }, 300);

    setTimeout(function () {
        while (completedTodo.firstChild) completedTodo.removeChild(completedTodo.firstChild);
    }, 300);
});