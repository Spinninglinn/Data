// inspiration from a code given me by ChatGPT, help from Syver and a whole lot of trying... and mistakes
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const liste = document.getElementById("liste");

let items = [];

if (localStorage.getItem("items")) {
    items = JSON.parse(localStorage.getItem("items"));
    items.forEach((item) => {
    addItemToList(item);
    });
}

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

function updateLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}


addButton.addEventListener("click", function () {
    const item = itemInput.value;
    if (item) {
        items.push(item);
        addItemToList(item);
        itemInput.value = "";
        
        updateLocalStorage();
    }
});



