
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
// let lettersList = document.getElementsByClassName('lettersOfWord')



const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

for (i = 0; i < alphabet.length; i++){
//creating element 'cirlce'
    const addCircle = document.createElement('span');
    addCircle.className = 'circle';
    addCircle.id = i;
    document.querySelector('section').appendChild(addCircle);
    
//assigning 'letter' to 'circle'
    let letter = document.createElement('p');
    letter.innerHTML = alphabet[i];
    document.getElementById(i.toString()).appendChild(letter);
    addCircle.style.left = i*63 + 'px';
    addCircle.style.marginLeft = '50px';
    if ((i%2)===0){
        addCircle.style.animationDirection = 'alternate';
    } 
    else {addCircle.style.animationDirection = 'alternate-reverse'}  
    
   
    addCircle.addEventListener('click', (e) => {
        let i=0;
        while (i < wordLength){
            console.log(document.getElementById((i+'letter').toString()).textContent)
        if (e.target.textContent === document.getElementById((i+'letter').toString()).textContent){
            alert('you got it!');
            i++;
            return;
        }//console.log(e.target.style.fontSize)}
        else {alert('keep trying!'); return;}
            //console.log(e.target.textContent
        }
        }) 
    
   }


      
    // if (arr.find(elem => elem === e.innerHTML)===true){
    //     alert('this is the letter!');
    








