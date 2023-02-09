
// kilde: https://www.geeksforgeeks.org/how-to-remove-an-added-list-items-using-javascript/
//function addItem() {
  //  const aElement = document.getElementById("handleliste");
  //  const vare = document.getElementById("vare");
  //  const li = document.createElement("li");
  //  li.setAttribute('li', vare.value);
  //  li.appendChild(document.createTextNode(vare.value));
  //  aElement.appendChild(li);

//}

//function removeItem() {
   // const aElement = document.getElementById("handleliste");
   // const vare = document.getElementById("vare");
   // const item = document.getElementById(vare.value);
   // aElement.removeChild(item);
//}


// inspiration from a code given me by ChatGPT

// Get references to the input field, add button, and shopping list
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const liste = document.getElementById("liste");

// An array to keep track of all the items in the shopping list
let items = [];

// Load the items from local storage if they exist
if (localStorage.getItem("items")) {
  items = JSON.parse(localStorage.getItem("items"));
  items.forEach(item => {
    addItemToList(item);
  });
}

// Add a new item to the shopping list
function addItemToList(item) {
  const listItem = document.createElement("li");
  listItem.innerHTML = item;
  listItem.addEventListener("click", function() {
    removeItemFromList(item);
  });
  liste.appendChild(listItem);
}

// Remove an item from the shopping list
function removeItemFromList(item) {
  liste.removeChild(event.target);
  items = items.filter(i => i !== item);
  updateLocalStorage();
}

// Update the items in local storage
function updateLocalStorage() {
  localStorage.setItem("items", JSON.stringify(items));
}

// Add the item when the add button is clicked
addButton.addEventListener("click", function() {
  const item = itemInput.value;
  if (item) {
    items.push(item);
    addItemToList(item);
    itemInput.value = "";
    updateLocalStorage();
  }
});

