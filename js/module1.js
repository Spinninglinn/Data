
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


//kilde: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
/*function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}*/

// Get references to the input field, add button, and shopping list
const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("list");

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
  list.appendChild(listItem);
}

// Remove an item from the shopping list
function removeItemFromList(item) {
  list.removeChild(event.target);
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

