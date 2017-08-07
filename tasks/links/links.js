/*
 При нажатии на одну из первых трех кнопок
 с нечетным индексом должен выводиться индекс ссылки.
 (Функцию printIndex реализовывать не нужно)
 */

var buttons = [];

for (var index = 0; index < buttons.length; index++) {
    buttons[index].onclick = function() {
        printIndex(index);
    }
}