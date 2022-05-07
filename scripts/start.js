
const btn = document.getElementById('inputButton');
let i=0;
let arr = [];

function addWord(){
  i=i+1;
 let btnWord = document.createElement('button');
 let input = document.querySelector('input');
 btnWord.innerHTML = input.value;
 btnWord.style.fontSize = '30px';
 btnWord.style.height = '50px';
 btnWord.style.margin = '5px';
 arr.push(input.value);
 btnWord.id = "word" + i;
 btnWord.addEventListener("click", () => {
    localStorage.setItem('btnWord', btnWord.textContent)
    location = "level_1.html"; // Navigate to new page
  });
 document.querySelector('.myWords').appendChild(btnWord);
 sessionStorage.setItem('arr',JSON.stringify(arr)); //storing array of words for Level 3 
 input.value = "";
} 

btn.addEventListener('click', () => {
if (i < 4){addWord()}
else if (i=4){
    addWord();
let start = document.createElement('h1');
start.innerHTML = "Select word to start the game!";
start.style.textAlign = 'center';
document.body.appendChild(start);}
});      

let btnTheme = document.querySelector('.theme');
btnTheme.addEventListener('click',(e) => {
  document.body.style.backgroundColor = e.target.dataset.color;
  let style = e.target.dataset.color.toString();
localStorage.setItem('style',e.target.dataset.color.toString());
});
