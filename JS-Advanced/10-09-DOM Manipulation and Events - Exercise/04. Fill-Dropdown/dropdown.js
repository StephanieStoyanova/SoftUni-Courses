function addItem() {
    const menuRef = document.getElementById('menu');
    const textInputRef = document.getElementById('newItemText');
    const keyInputRef = document.getElementById('newItemValue');

    let textValue = textInputRef.value;
    let keyValue = keyInputRef.value;

    let optionEl = document.createElement("option");
    optionEl.textContent = textValue;
    optionEl.value = keyValue;

    menuRef.appendChild(optionEl);

    textInputRef.value = "";
    keyInputRef.value = "";
}