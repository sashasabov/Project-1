
let str = ['one', 'two', 'three', 'four',  'fifteen', 'sashasabov'];


for (i = 0; i < str.length; i++){
    let objWord = document.createElement('span');
    objWord.className = "circle";
    objWord.id = i;
    objWord.style.width = (str[i].length + 2) +'rem';
    objWord.style.height = '5rem';
    objWord.style.marginRight = '50px'
    document.querySelector('.grey').appendChild(objWord);
    console.log(objWord)

    let word = document.createElement('p');
    word.innerHTML = str[i];
    document.getElementById(i.toString()).appendChild(word);
    if ((i%2) === 0){
        objWord.style.animationDirection = 'alternate';
    } 
    else {objWord.style.animationDirection = 'alternate-reverse'} 

}
