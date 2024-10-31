document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var minCol = parseInt(document.getElementById('minColumn').value);
    var maxCol = parseInt(document.getElementById('maxColumn').value);
    var minRow = parseInt(document.getElementById('minRow').value);
    var maxRow = parseInt(document.getElementById('maxRow').value);

    var table = generateTable(minCol, maxCol, minRow, maxRow);
    var container = document.getElementById('tableContainer');
    container.innerHTML = "";
    container.appendChild(table);
});

function generateTable(minCol, maxCol, minRow, maxRow) {
    var table = document.createElement('table');
    var thead = table.createTHead();
    var headerRow = thead.insertRow();
    var th = document.createElement('th');
    headerRow.appendChild(th);

    for (var col = minCol; col <= maxCol; col++) {
        var th = document.createElement('th');
        th.textContent = col;
        headerRow.appendChild(th);
    }

    for (var row = minRow; row <= maxRow; row++) {
        var tr = table.insertRow();
        var th = document.createElement('th');
        th.textContent = row;
        tr.appendChild(th);

        for (var col = minCol; col <= maxCol; col++) {
            var td = tr.insertCell();
            td.textContent = row * col;
        }
    }

    return table;
}
