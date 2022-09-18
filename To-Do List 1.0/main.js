let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
// Don't forget the semicolons. 

addToDoButton.addEventListener('click', function(){
    // Var to create an element, in this case <p>
    var paragraph = document.createElement('p')

    // Add style, else text in toDo will be plain.
    paragraph.classList.add('paragraph-styling')

    // Set inner text of paragraph to inputField value.
    paragraph.innerText = inputField.value;

    // Append paragraph to toDoContainer
    toDoContainer.appendChild(paragraph);

    // To clear the inputField after being used.
    inputField.value = "";

    // Line through for list items
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

    // Remove a paragraph from toDoContainer
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})