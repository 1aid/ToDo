const form = document.querySelector('#add-item')
const input = document.querySelector('#item');
const itemList = document.querySelector('#item-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
const newItem = document.createElement('li');
newItem.innerText = input.value;
input.value='';
itemList.appendChild(newItem);
});