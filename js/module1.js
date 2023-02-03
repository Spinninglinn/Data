
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
function storageAvailable(type) {
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
}

