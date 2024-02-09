function deleteByEmail() {
    const input = document.querySelector('[name="email"]');
    const rows = Array.from(document.querySelectorAll('#customers tbody tr'));

    let success = false;

    for (let row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            success = true;
        }
    }

    const output = document.getElementById('result');

    if (success) {
        output.textContent = 'Deleted.';
    } else {
        output.textContent = 'Not found.';
    }
} 