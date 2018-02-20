const inputNewTodo = document.getElementById("inputNewTodo");
const buttonAddNewTodo = document.getElementById("buttonAddNewTodo");
const buttonDeleteAllTodos = document.getElementById('buttonDeleteAllTodos');

//creates a new li-element from the inputfield
function newListItem() {
    const li = document.createElement("li");
    const inputText = document.getElementById("inputNewTodo").value;
    const theTodo = document.createTextNode(inputText);
    li.appendChild(theTodo);
    
    const buttonDeleteTodo = document.createElement("button");
    const textButtonDelete = document.createTextNode("Delete");
    
    //Checks if the inputfield is empty
    if (inputText === "") {
        alert("You can't add an empty todo, please write a todo");
    } else {
        document.getElementById("ulAllTodos").appendChild(li);
        buttonDeleteTodo.appendChild(textButtonDelete)
        li.appendChild(buttonDeleteTodo)
    }
}

/*
function deleteTodo(){
    const todos = document.getElementsByTagName('li')
    for(const todo of todos){
        let buttonDeleteTodo = document.createElement("button");
        let textButtonDelete = document.createTextNode("Delete");
        buttonDeleteTodo.appendChild(textButtonDelete)
        todo.appendChild(buttonDeleteTodo)
    }
}

*/
/*
function deleteTodo(){    
    var allTodos = document.getElementsByTagName("li");
    for(let i = 0; i < allTodos.length; i++){
        let buttonDeleteTodo = document.createElement("button");
        let textButtonDelete = document.createTextNode("Delete");
        buttonDeleteTodo.appendChild(textButtonDelete)
        allTodos[i].appendChild(buttonDeleteTodo)
    }
}
*/




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



