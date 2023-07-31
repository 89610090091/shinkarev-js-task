// creation
const str = 'содержимое моей строки' // с любыми ковычками '' "" `${}`

// so it is possible but not necessary
const strObj = new String('the contents of my line')

// To access the line itself, you will have to use the method
strObj.valueOf() // contents of my line

// and typeof will return 'object'
typeof (strObj) === 'object'

// Access to symbols
str[1] === 'о'
str.charAt(1) === 'о'

// The only difference other than the ease of writing
str[1000] === undefined
str.charAt(1000) === ''

// Changing characters is ignored. Strings are immutable!
str[1] = 'A'
str[1] === 'о' // true

// Adding to the line
const str = 'соединение ' + 'строк'
// If we want to add a value from a variable
const value = 123;
const str = `the value of this variable is: ${value}`

// String comparison occurs character by character from the first to the last character.
// It's not the characters themselves that are compared, but their unicode, which you can spy on Google.
// The main thing you need to know is that unicode characters are arranged alphabetically,
// first everything is in uppercase, then everything is in lowercase.
'A' < 'a' === true
'a' < 'b' === true

// Characters can be escaped inside the string
const str = 'содержимое \'с ковычками\' внутри'

// Some of them are key. There is a table with them on MSDN.
// Below are the most common:

'\n' // new line
'\t' // tabulation

// If the line is too long, then escape the line break
const str = 'hello hello hello hello hellllllooooooo'

// You can still do this
const str = 'hello hello hello hello hello hello hello hello'
    + 'fits on the screen.'

// Any character can be obtained by knowing its unicode
String.fromCharCode(0x3C0) // π
String.fromCharCode(0x0A7) // §

// // Each line knows its length
const str = 'содержимое моей строки'
str.length === 22

// // Changing the length is ignored
str.length = 12
str.length === 22 //true

const str = 'содержимое моей строки'
// Basic String methods
// Combining
const newStr = str.concat('123') // '// 'contents of my line 123'

// Checking for substring content
const isIncludes = str.includes('мое') // true

// Checking the beginning / end of a line
str.startsWith('содержи') // true
str.endsWith('ей строки') // true

// Index of the substring. Previously, the method was used to check the contents of a substring
const index = str.indexOf('моей') // index === 11

// Repeat several times
const str = '*'
const stars = str.repeat(5) // '*****'

// Substring replacement
const newStr = str.replace('o', 'О') // newStr === 'The contents of my line'

// A relatively new method. It doesn't always work.
const newStr = str.replaceAll('o', 'О') // newStr === 'The contents of my line'

// Trim part of the string
const substing = str.slice(5, 10) // substing === 'string'
const substing = str.substring(5, 10) // substing === 'string'

// Split into an array of strings
const arr = '123'
const strArray = str.split('') // strArray = ['1', '2', '3']

// Lead to lowercase or uppercase
str.toLowerCase()
str.toUpperCase()

// Trim whitespace characters at the beginning and end
const str = '    __123    '
const newStr = str.trim() // newStr === '123'
