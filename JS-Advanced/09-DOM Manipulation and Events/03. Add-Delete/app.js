function addItem() {
    const input = document.getElementById('newItemText');

    if (input.value.length == 0) {
        return;
    }

    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete);
    li.appendChild(deleteBtn);

    const list = document.getElementById('items');
    list.appendChild(li);

    input.value = '';
}

function onDelete(event) {
    const deleteBtn = event.target;
    const liElement = deleteBtn.parentElement;
    liElement.remove();
}