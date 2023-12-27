const fBtn = document.querySelector('#btn1');

fBtn.onclick = function(){
    window.alert('You now have virus on your computer');
    console.log('You now have virus on your computer');
}

const sBtn = document.querySelector('#btn2');
sBtn.addEventListener('click', ()=>{
    alert("This is the second button");

});