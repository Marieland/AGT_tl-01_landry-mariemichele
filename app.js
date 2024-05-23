/*Quand l'utilisateur défile la page, on veut que le header se rapetisse*/

let checkHeader = function(){
    console.log('checkHeader')
;

//Detect scroll position
let scrollPosition = Math.round(window.scrollY);

//If we scrolled 100px, add "sticky" class to the header
if(scrollPosition > 50){
    document.querySelector('header').classList.add('sticky');
}

//If not, remove "sticky" class from header
else{
    document.querySelector('header').classList.remove('sticky');
}
};


//Run the checkheader function everytime you scroll
window.addEventListener('scroll', checkHeader);