//let str = 'apple';
// let word = document.createElement('h1');
// word.innerHTML = str;
//document.body.appendChild(word);
//word.style.textAlign = 'center';

let str = localStorage.getItem('btnWord');
let arr = str.split('');

for (i = 0; i < arr.length; i++){
    let char = document.createElement('li');
    char.innerHTML = arr[i];
    char.id = i + 'letter';
    document.querySelector('li').appendChild(char);

    document.getElementById((i+'letter').toString()).style.fontSize ='40px';
}


document.addEventListener('keypress', (e) =>{
for (i = 0; i < arr.length; i++){
    let c = document.getElementById((i+'letter').toString()); 
    let cNext = document.getElementById(((i+1)+'letter').toString());

    if (e.key === c.textContent && c.style.fontSize === "40px")
    {   if (i < (arr.length - 1)){    
        if (e.key === c.textContent && e.key === cNext.textContent){
         c.style.fontSize = "60px";
         console.log(e.key);
         return;}}
         if (i===(arr.length-1)){
            c.style.fontSize = "60px";
            c.style.color = "red";
            document.querySelector('.btn_level').style.display = 'flex';
            console.log('level 2!');return;}
        c.style.fontSize ='60px';
        c.style.color = 'red';
        console.log(e.key);
        return;}
}
})
