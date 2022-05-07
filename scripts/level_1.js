let gameTheme = localStorage.getItem('style');

if(gameTheme ==='red'){
document.querySelector('section').style.backgroundColor = gameTheme;
document.body.style.backgroundColor = 'blue';
}
if(gameTheme ==='cornflowerblue'){
    document.querySelector('section').style.backgroundColor = gameTheme;
    document.body.style.backgroundColor = 'tomato';
    }
if(gameTheme ==='forestgreen'){
        document.querySelector('section').style.backgroundColor = gameTheme;
        document.body.style.backgroundColor = 'saddlebrown';
        }

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

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let img = document.getElementById('image');

for (i = 0; i < alphabet.length; i++){
//creating element 'cirlce'
    let objCircle = document.createElement('span');
    objCircle.className = 'circle';
    objCircle.id = i;
    document.querySelector('.main').appendChild(objCircle);
    
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
       for (i = 0; i < arr.length; i++){

        let char = document.getElementById((i+'letter').toString()); 
        let charNext = document.getElementById(((i+1)+'letter').toString());
        
        if (e.target.textContent != char.textContent && char.style.fontSize === "40px"){
        img.classList.add('active');
        setTimeout(function(){
        img.classList.remove('active')
        }, 1000);
         return;
    }
      
        else if (e.target.textContent != char.textContent 
            && arr.includes(e.target.textContent) 
            && char.style.fontSize === "40px"){
        img.classList.add('active');
        setTimeout(function(){
        img.classList.remove('active')
        }, 1000);
        return;
    }
        
        else if (e.target.textContent === char.textContent
            && char.style.fontSize === "40px"){
            if (i<(arr.length-1)){    
            if (e.target.textContent === char.textContent && e.target.textContent === charNext.textContent){
            char.style.fontSize = "60px";
            char.style.color = gameTheme;
            return;
            }}
            if (i===(arr.length-1)){
                char.style.fontSize = "60px";
                char.style.color = gameTheme;
                document.querySelector('.btn_level').style.display = 'flex';
                return;
            }
            char.style.fontSize = "60px";
            char.style.color = gameTheme;
            return;    
           } 
        }
    })
}
                