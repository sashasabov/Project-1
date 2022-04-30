
// const word = document.createElement('h');
// word.innerHTML = 'apple';
// word.style.fontSize = "60px";
// let str = word.innerHTML;
// document.querySelector('.word').appendChild(word);

let str = 'apple';
let arr = str.split('');

for (i = 0; i < arr.length; i++){
    let letterOfWord = document.createElement('li');
    letterOfWord.innerHTML = arr[i];
    letterOfWord.id = i + 'letter';
    document.querySelector('.lettersOfWord').appendChild(letterOfWord);
    document.getElementById((i+'letter').toString()).style.fontSize ='40px';
}
let wordLength = document.querySelector('.lettersOfWord').children.length;


const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

for (i = 0; i < alphabet.length; i++){
//creating element 'cirlce'
    const addCircle = document.createElement('span');
    addCircle.className = 'circle';
    addCircle.id = i;
    document.querySelector('.grey').appendChild(addCircle);
    
//assigning 'letter' to 'circle'
    let letter = document.createElement('p');
    letter.innerHTML = alphabet[i];
    document.getElementById(i.toString()).appendChild(letter);
    addCircle.style.left = i*10 + 'px';
    addCircle.style.marginLeft = '50px';
    if ((i%2)===0){
        addCircle.style.animationDirection = 'alternate';
    } 
    else {addCircle.style.animationDirection = 'alternate-reverse'}  
    
 //adding "click" event to 'circle'  
    addCircle.addEventListener('click', (e) => {
       for (i = 0; i < wordLength; i++){
        let char = document.getElementById((i+'letter').toString()); 
        let charNext = document.getElementById(((i+1)+'letter').toString());

        if (e.target.textContent != char.textContent 
            && arr.includes(e.target.textContent) 
            && char.style.fontSize === "40px"){return;}

        else if (e.target.textContent === char.textContent
            && char.style.fontSize === "40px"){
            if (i<(wordLength-1)){    
           if (e.target.textContent === char.textContent && e.target.textContent === charNext.textContent){
            char.style.fontSize = "60px";
            char.style.color = "purple";
            return;
            }}
            char.style.fontSize = "60px";
            char.style.color = "purple";
            return;
           }

        else if (e.target.textContent === char.textContent
            && char.style.fontSize === "60px"){console.log('move on');}
        }
    })
    }
