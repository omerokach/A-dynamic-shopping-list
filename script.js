const list = document.querySelector(`ul`);
const input = document.querySelector(`input`);
const addButton = document.querySelector(`button`);

addButton.onclick = function(){
    let item = input.value;
    input.value = '';

    const liItem = document.createElement(`li`);
    const spanText = document.createElement(`span`);
    const delButton = document.createElement(`button`);


}
