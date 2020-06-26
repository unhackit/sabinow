let trending = document.getElementsByName('trending')[0];
let popular = document.getElementsByName('popular')[0];

let carouselOne = document.querySelector('.data-one');
let carouselTwo = document.querySelector('.data-two');

 carouselTwo.style.visibility = 'hidden'
 carouselTwo.style.height = '0px'

popular.addEventListener('click', () => {
    carouselOne.style.visibility = 'visible'
    carouselTwo.style.visibility = 'hidden'
    carouselTwo.style.height = '0px'
    carouselOne.style.height = '100%'
    trending.classList.remove('active')
    popular.classList.add('active ')
})

trending.addEventListener('click', () => { 
    carouselTwo.style.visibility = 'visible';
    carouselOne.style.visibility = 'hidden';
    carouselOne.style.height = '0px'
    carouselTwo.style.height = '100%'
    popular.classList.remove('active')
    trending.classList.add('active')
})




