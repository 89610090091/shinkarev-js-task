// 10
const str = 'Привет, меня зовут Дмитрий!';

function foo(str, symbol) {
    const indexes = [];
    for (let index = 0; index < str.length; index++) {
        if (str[index] === symbol) {
            indexes.push(index);
        }
    }

    console.log('индексы: ', indexes.join(', '));
    console.log('количество совпадений: ', indexes.length);
}