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


let rightWord = localStorage.getItem('btnWord');
let sessionString = sessionStorage.getItem('arr');
let str = JSON.parse(sessionString);
let img = document.getElementById('image');
img.style.position = 'absolute';
console.log(str)


for (j = 0; j < str.length; j++){

    //creating 'circle' object
        let objWord = document.createElement('span');        
        objWord.className = 'wordInCircle ';
        objWord.id = j;
        objWord.style.width = (str[j].length + 2) +'rem';
        objWord.style.height = '5rem';
        objWord.style.marginRight = '50px'
        document.querySelector('.main').appendChild(objWord);

    //assigning 'word' to 'circle'
        let word = document.createElement('p');
        word.innerHTML = str[j];
        document.getElementById(j.toString()).appendChild(word);
        if ((j%2) === 0){
            objWord.style.animationDirection = 'alternate';
        } 
        else {objWord.style.animationDirection = 'alternate-reverse'} 

    //adding click event to 'circle'
        objWord.addEventListener("click", (e) =>{
            if(e.target.textContent === rightWord){
                document.querySelector('h1').innerHTML = 'YAY! YOU PASSED ALL LEVELS AND LEARNED A NEW WORD!';
                document.querySelector('h1').style.color = 'white';
                document.querySelector('.main').style.display = 'none';
                document.querySelector('#emoji').classList.add('active');
                document.querySelector('.btn_level').style.display = 'flex';
            }
        else{
            img.classList.add('active');
            setTimeout(function(){
            img.classList.remove('active')
            }, 1000);return;}
        })
}


