function generateReport() {
    const table = document.querySelector('table');
    const headers = Array.from(table.querySelectorAll('thead th input[type="checkbox"]'));
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const report = [];

    rows.forEach(row => {
        const rowData = {};
        headers.forEach((header, index) => {
            if (header.checked) {
                const columnName = header.getAttribute('name');
                const cellData = row.cells[index].textContent.trim();
                rowData[columnName] = cellData;
            }
        });
        report.push(rowData);
    });
    const output = document.getElementById('output');
    output.value = JSON.stringify(report);
}