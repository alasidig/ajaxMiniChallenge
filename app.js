function showList() {
    //TODO Make AJAX call to get the list
    document.querySelector("#myUL").innerHTML = `
    <li id="1" onclick="checkItem(this)">Hit the gym <span class="close" onclick="deleteItem(this)">x</span></li>
    <li id="2" onclick="checkItem(this)" class="checked">Pay bills<span class="close" onclick="deleteItem(this)">x</span></li>
    <li id="3" onclick="checkItem(this)">Buy eggs<span class="close" onclick="deleteItem(this)">x</span></li>
    <li id="4" onclick="checkItem(this)">Read a book<span class="close" onclick="deleteItem(this)">x</span></li>
    <li id="5" onclick="checkItem(this)">Organize office<span class="close" onclick="deleteItem(this)">x</span></li>
`
}
showList()

function deleteItem(source) {
    //TODO Make AJAX call to delete the Item
    source.parentElement.style.display = "none";
}

// Add a "checked" symbol when clicking on a list item
function checkItem(ev) {
    //TODO Make AJAX call to update the Item on the Webservice
    ev.classList.toggle('checked');
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        //TODO: make AJAX call to create item on the API
        let newItem = `<li onclick="checkItem(this)">${inputValue} <span class="close" onclick="deleteItem(this)">x</span></li>`
        document.getElementById("myUL").innerHTML += newItem;
    }
    document.getElementById("myInput").value = "";
}