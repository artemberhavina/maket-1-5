$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        variableWidth: true,
    });
});

let btn = document.querySelector('button');
let itemRemove = document.querySelector('li');

let elem = document.querySelectorAll('#elem');
let btnOpen = document.querySelector('#btnShow');
let btnClose = document.querySelector('#btnHide');






btnOpen.addEventListener('click', function() {

    for (let i = 0; i < elem.length; i++) {
        elem[i].classList.remove('main__item--hide720');
        elem[i].classList.remove('main__item--hide1008');
        
    }

    btnOpen.classList.add('main__button--hide');
    btnOpen.classList.remove('main__button--show');
    btnClose.classList.add('main__button--show');
    
    
    
})

btnClose.addEventListener('click', function() {

    
    for (let i = 0; i < elem.length; i++) {
        elem[i].classList.add('main__item--hide720');
        
              
    }
    for (let i = 2; i < elem.length; i++) {
        
        elem[i].classList.add('main__item--hide1008');
              
    }
    


    btnOpen.classList.remove('main__button--hide');
    btnOpen.classList.add('main__button--show');
    btnClose.classList.remove('main__button--show');
    
    
    
})



