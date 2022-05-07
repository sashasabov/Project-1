
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


for (i = 0; i < str.length; i++){
//creating 'circle' object
    let objWord = document.createElement('span');
    objWord.className = "circle";
    objWord.id = i;
    objWord.style.width = (str[i].length + 2) +'rem';
    objWord.style.height = '5rem';
    objWord.style.marginRight = '50px'
    document.querySelector('.main').appendChild(objWord);
    
//assigning 'word' to 'circle'
    let word = document.createElement('p');
    word.innerHTML = str[i];
    document.getElementById(i.toString()).appendChild(word);
    if ((i%2) === 0){
        objWord.style.animationDirection = 'alternate';
    } 
    else {objWord.style.animationDirection = 'alternate-reverse'} 

//adding 'click' event to a 'circle'
    objWord.addEventListener('click', (e) => {
//   commented out all these to make it work faster    
    if(e.target.innerHTML === rightWord){
        // alert('YAY! YOU GOT IT!')
        document.querySelector('h1').innerHTML = 'YAY! YOU PASSED ALL LEVELS AND LEARNED A NEW WORD!';
        document.querySelector('h1').style.color = 'white';
        document.querySelector('.main').style.display = 'none';
        // document.getElementById('red3').classList.add('active');
        // if(gameTheme ==='red'){
        //     let imgBonus = document.getElementById(('red'+(Math.floor(Math.random() * 3) + 1)).toString()); 
        // imgBonus.classList.add('active');return;
        // }
        // else if(gameTheme ==='cornflowerblue'){
        //     let imgBonus = document.getElementById(('blue'+(Math.floor(Math.random() * 3) + 1)).toString());
        //     imgBonus.classList.add('active');return;
        // }
        // else if(gameTheme ==='forestgreen'){
        //     let imgBonus = document.getElementById(('green'+(Math.floor(Math.random() * 3) + 1)).toString());
        //     imgBonus.classList.add('active');return;
        // }
    }
    else {
        img.classList.add('active');
        setTimeout(function(){
        img.classList.remove('active')
        }, 1000);return;
        }
    });
}

