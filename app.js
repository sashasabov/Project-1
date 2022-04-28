
const word = document.createElement('h');
word.innerHTML = 'WORD';
let str = word.innerHTML;
document.querySelector('.word').appendChild(word);
let arr = str.split('');
console.log(arr[0]);
const letter = document.createElement('p');
letter.innerHTML = 'W';
document.querySelector('.circle').appendChild(letter)

const addCircle = document.createElement('span');
document.querySelector('letterField').appendChild(addCircle)

