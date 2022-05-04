

//let str = 'sasha';
let str = localStorage.getItem('btnWord');
let arr = str.split('');

//creating list element for each letter of word
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
    let objCircle = document.createElement('span');
    objCircle.className = 'circle';
    objCircle.id = i;
    document.querySelector('.grey').appendChild(objCircle);
    
//assigning 'letter' to 'circle'
    let letter = document.createElement('p');
    letter.innerHTML = alphabet[i];
    document.getElementById(i.toString()).appendChild(letter);
    if ((i%2) === 0){
        objCircle.style.animationDirection = 'alternate';
    } 
    else {objCircle.style.animationDirection = 'alternate-reverse'}  

    
 //adding "click" event to 'circle'  
    objCircle.addEventListener('click', (e) => {
       for (i = 0; i < wordLength; i++){

       // document.getElementById('image').style.display = 'none'; 
        let char = document.getElementById((i+'letter').toString()); 
        let charNext = document.getElementById(((i+1)+'letter').toString());
        

        // if(i===wordLength-1){
        //     console.log('word length condition');
        //     document.querySelector('.image').style.display = 'block !important'; 
        // }

        if (e.target.textContent != char.textContent && char.style.fontSize === "40px"){
         //document.getElementById('image').style.display = 'block'; 
         alert('Keep trying!');
         console.log('BUMMER!');
         return;
        }
      
        else if (e.target.textContent != char.textContent 
            && arr.includes(e.target.textContent) 
            && char.style.fontSize === "40px"){
            alert('Keep trying!');
            //document.getElementById('image').style.display = 'block'; 
            console.log('BUMMER!')
            return;}
       

        else if (e.target.textContent === char.textContent
            && char.style.fontSize === "40px"){
            if (i<(wordLength-1)){    
           if (e.target.textContent === char.textContent && e.target.textContent === charNext.textContent){
            char.style.fontSize = "60px";
            char.style.color = "purple";
            return;
            }}
            if (i===(wordLength-1)){
                char.style.fontSize = "60px";
                char.style.color = "purple";
                document.querySelector('.btn_level').style.display = 'flex';
                ;return;}
            char.style.fontSize = "60px";
            char.style.color = "purple";
            return;
           }

        else if (e.target.textContent === char.textContent
            && char.style.fontSize === "60px"){
                document.getElementById('image').style.display = 'block';   
              console.log('move on');}
              
       
    //    else if (char.id === ((arr.length - 1)+'letter') && e.target.textContent === char.textContent){
    //         // document.querySelector('level2').style.display = 'block';
    //         console.log('Level 2 is up!');
    //     }
        

        }
    })
    
}