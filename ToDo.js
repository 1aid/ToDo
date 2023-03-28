const form = document.querySelector('#add-item')
const input = document.querySelector('#item');
const itemList = document.querySelector('#item-list');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
  todos.forEach(function(todo) {
    const newItem = document.createElement('li');
    newItem.innerText = todo;
    itemList.appendChild(newItem);
  });
}

function saveTodo() {
  const newItem = document.createElement('li');
  newItem.innerText = input.value;
  input.value = '';
  itemList.appendChild(newItem);
  todos.push(newItem.innerText);
  localStorage.setItem('todos', JSON.stringify(todos));
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  saveTodo();
});

window.addEventListener('load', function() {
  renderTodos();
});