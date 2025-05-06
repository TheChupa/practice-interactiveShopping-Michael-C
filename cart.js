//Dom Elements   NOT SURE WHY THESE HAVE TO BE HERE, but they do
const submitButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const editButton = document.getElementById("edit");






// Handle Answer Click

submitButton.addEventListener("click", function() {
    const list = document.createElement("li");  //references the list
    const item = document.getElementById("item").value; //receive input from box--has to be inside the function
    const itemText = document.createTextNode(item);  //changes input to a text node (which works with appendchild)   YOU MUST USE NODES WHEN USING append/removechild
    const removeButton = document.createElement("button"); // adds remove button to list
    removeButton.style = "width:100px;height:50px;" //CSS
    removeButton.innerText = "Remove Item"          //CSS
    const editButton = document.createElement('button') // adds edit button to list
    editButton.style = "width:100px;height:50px;"// Could do this in CSS
    editButton.innerText = "Edit Item"
    list.appendChild(itemText); // adds node to list
    list.appendChild(removeButton); // add button to the list
    list.appendChild(editButton); // add button to the list
    document.getElementById('list').appendChild(list);//references list, maybe gets us the output...not sure why this is needed

    removeButton.addEventListener("click", function(){
        document.getElementById(`list`).removeChild(list)  // on click removes the list element
    });

    editButton.addEventListener("click", function(){ //on click changes edit button to "save button"
        editButton.innerText = "Save Item"
    });
    //On the second click, it fills in whatever you have in the input box
    editButton.addEventListener("click", function() {
        const newItem = document.getElementById("item").value;
        list.textContent = newItem
        list.appendChild(removeButton);
        list.appendChild(editButton)

    });
        // tried to do user promt, but would not function correctly
    // editButton.addEventListener("click", function(){
    //         const newItem = window.prompt("Enter new Item", "Type Here");//on click, replace the element with whatever is typed in the original input bar
    //         list.textContent = newItem
    //         list.appendChild(removeButton);
    //         list.appendChild(editButton)  
    // });

});
    

    












