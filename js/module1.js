// inspiration from a code given me by ChatGPT and help from Syver

// Get references to the input field, add button, and shopping list
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const liste = document.getElementById("liste");

// An array to keep track of all the items in the shopping list
let items = [];

// Load the items from local storage if they exist
if (localStorage.getItem("items")) {
    items = JSON.parse(localStorage.getItem("items"));
    items.forEach((item) => {
    addItemToList(item);
    });
}

// Add a new item to the shopping list
function addItemToList(item) {
    const listItem = document.createElement("li");
    const listDelete = document.createElement("button");
    listDelete.className = "listDelete";
    const listSpan = document.createElement("span");
    listSpan.className = "listSpan";
    listSpan.innerHTML = item;

    listItem.prepend(listDelete);
    listItem.appendChild(listSpan);
    liste.appendChild(listItem);

    listDelete.addEventListener("click", () => {
        listItem.parentNode.removeChild(listItem);
        items = items.filter((i) => i !== item);
        updateLocalStorage();
    });
}

// Update the items in local storage
function updateLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}

// Add the item when the add button is clicked
addButton.addEventListener("click", function () {
    const item = itemInput.value;
    if (item) {
        items.push(item);
        addItemToList(item);
        itemInput.value = "";
        updateLocalStorage();
    }
});