const list = document.querySelector(`ul`);
const input = document.querySelector(`input`);
const addButton = document.querySelector(`button`);

addButton.onclick = function() {
    let item = input.value;
    input.value = '';

    const listRow = document.createElement(`li`);
    const listSpan = document.createElement(`span`);
    const delButton = document.createElement(`button`);

    listRow.appendChild(listSpan);
    listSpan.textContent = item;
    listRow.appendChild(delButton);
    delButton.textContent = 'delete';
    list.appendChild(listRow)

    delButton.onclick = function(){
        list.remove(listRow);
    }

}
