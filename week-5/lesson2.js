// способы обработки события
// 1) в html
// <button onclick="функция">кнопка</button>

// 2) element.onclick = function() {}

// 3) element.addEventListener('eventName', function(event) {})
// event.target
// event.screenX || event.screenY
// event.pageX || event.pageY
// event.clientX || event.clientY

// основные события:
// https://oddler.ru/blog/i63

// все существующие события:
// https://developer.mozilla.org/ru/docs/Web/Events

// что почитать:
// https://learn.javascript.ru/introduction-browser-events

// демонстрация всплытия событий
document.getElementById('first').addEventListener('click', (event) => {
    console.log(event.target);
});

// остановка всплытия событий 
document.getElementById('button').addEventListener('click', (event) => {
    console.log('событие на кнопке');
    event.stopPropagation();
});

// отмена события по умолчанию
document.getElementById('button').addEventListener('contextmenu', (event) => {
    event.preventDefault();
});


document.addEventListener('click', (event) => {
    console.log('Позиция курсора по горизонтали: ', event.pageX);
    console.log('Позиция курсора по вертикали: ', event.pageY);
});