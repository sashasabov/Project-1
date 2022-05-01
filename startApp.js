
const btn = document.getElementById('inputButton');
let i=0;

function addWord(){
  i=i+1;
 let newList = document.createElement('li')
 document.querySelector('ul').appendChild(newList)
 let buttonWord = document.createElement('button');
 let input = document.querySelector('input');
 buttonWord.innerHTML = input.value;
 buttonWord.id = "word" + i;
 console.log("button " + buttonWord.id);
 let myWords = newList.appendChild(buttonWord);
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

// else if (i=5){
//    addWord();
    //     let start = document.createElement('h1');
    // start.innerHTML = "Select word to start the game!";
    // start.style.textAlign = 'center';
    // document.body.appendChild(start);
       
// }


