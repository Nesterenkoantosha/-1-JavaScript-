const input = document.getElementById('itemInput');
const addButton = document.getElementById('addItemBtn');
const clearButton = document.getElementById('clearListBtn');
const list = document.getElementById('shoppingList');

// Додавання нового елемента
addButton.addEventListener('click', () => {
    const value = input.value.trim();
    if (value === '') return; // якщо порожньо — нічого не робимо

    const li = document.createElement('li');
    li.textContent = value;

    // Одинарний клік -> перемикання куплений/не куплений
    li.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    // Подвійний клік -> видалення елемента
    li.addEventListener('dblclick', () => {
        list.removeChild(li);
    });

    list.appendChild(li);
    input.value = ''; // очищення поля вводу
});

// Очищення всього списку
clearButton.addEventListener('click', () => {
    list.innerHTML = '';
});

