
const btn = document.getElementById('inputButton');
let i=0;
let arr = [];

function addWord(){
  i=i+1;
 let newList = document.createElement('li')
 document.querySelector('ul').appendChild(newList)
 let btnWord = document.createElement('button');
 let input = document.querySelector('input');
 btnWord.innerHTML = input.value;
 arr.push(input.value);
 btnWord.id = "word" + i;
 btnWord.addEventListener("click", () => {
     localStorage.setItem('btnWord', btnWord.textContent)
    location = "level_1.html"; // Navigate to new page
  });
 let myWords = newList.appendChild(btnWord);
 console.log(arr.toString());
 
// localStorage.setItem('arr', document.querySelector('ul').innerText);
sessionStorage.setItem('arr',JSON.stringify(arr));
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

}
);      



