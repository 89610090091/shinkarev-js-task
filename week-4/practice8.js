// 10
const str = 'my  name is Aleksandr';

function foo(str, symbol) {
    const indexes = [];
    for (let index = 0; index < str.length; index++) {
        if (str[index] === symbol) {
            indexes.push(index);
        }
    }

    console.log('indexes: ', indexes.join(', '));
    console.log('number of matches: ', indexes.length);
}
