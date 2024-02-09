function addItem() {
    const inputText = document.getElementById("newItemText");

    if (inputText.value.length == 0) {
        return;
    }
    
    const liElement = document.createElement("li");
    liElement.textContent = inputText.value;

    const list = document.getElementById("items");
    list.appendChild(liElement);

    inputText.value = "";
}