const toTopButton = document.getElementById('toTopButton');
toTopButton.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:'smooth'});

});