
let rightWord = localStorage.getItem('btnWord');
let sessionString = sessionStorage.getItem('arr');
let str = JSON.parse(sessionString);
let img = document.getElementById('image');
img.style.right = '0';


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
        
    if(e.target.innerHTML === rightWord){
        alert('YAY! YOU GOT IT!')
    }
    else {
        img.classList.add('active');
        setTimeout(function(){
        img.classList.remove('active')
        }, 1000);
        // alert('Keep trying!')
        // console.log('keep trying!')}
    }
})
}
