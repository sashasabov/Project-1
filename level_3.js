
let rightWord = localStorage.getItem('btnWord');
console.log(rightWord);
let sessionSring = sessionStorage.getItem('arr');
let str = JSON.parse(sessionSring);


for (i = 0; i < str.length; i++){
    //creating 'circle' object
    let objWord = document.createElement('span');
    objWord.className = "circle";
    objWord.id = i;
    objWord.style.width = (str[i].length + 2) +'rem';
    objWord.style.height = '5rem';
    objWord.style.marginRight = '50px'
    document.querySelector('.grey').appendChild(objWord);
    

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
        //document.getElementById('image').style.display = 'none';
    if(e.target.innerHTML === rightWord){
        alert('YAY! YOU GOT IT!')
    }
    else {
        //document.getElementById('image').style.display = 'block';
        alert('Keep trying!')
        console.log('keep trying!')}
    })
}
