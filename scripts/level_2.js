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
let img = document.getElementById('image');

for (i = 0; i < arr.length; i++){
//assing letter into inline list element    
    let char = document.createElement('li');
    char.innerHTML = arr[i];
    char.id = i + 'letter';
    document.querySelector('.word').appendChild(char);
    document.getElementById((i+'letter').toString()).style.fontSize ='40px';
}

//adding 'keypress' event to respond to keyboard when typing the word 
document.addEventListener('keypress', (e) =>{
for (i = 0; i < arr.length; i++){
    let c = document.getElementById((i+'letter').toString()); 
    let cNext = document.getElementById(((i+1)+'letter').toString());

    if (e.key === c.textContent && c.style.fontSize === "40px"){
        if (i < (arr.length - 1)){    
        if (e.key === c.textContent && e.key === cNext.textContent){
         c.style.fontSize = "60px";
         c.style.color = gameTheme;
         return;
        }
    }
         if (i===(arr.length-1)){
            c.style.fontSize = "60px";
            c.style.color = gameTheme;
            document.querySelector('.btn_level').style.display = 'flex';
            return;}
        c.style.fontSize ='60px';
        c.style.color = gameTheme;
        return;
    }
    else if (e.key != c.textContent && c.style.fontSize === "40px"){
        img.classList.add('active');
        setTimeout(function(){
        img.classList.remove('active')
        }, 1000);
        return;
    }
}
})
