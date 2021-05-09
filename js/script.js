const menuBtn = document.querySelector('.menu-btn');
const dropDown = document.querySelector('.menu_list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        dropDown.style.display = 'block';
        dropDown.style.margin = '50px 200px 100px -75px';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        dropDown.style.display = 'none';
    }
});

function scrollToChurches(btnId) {
    let element;
    let elementSelector;
    let yOffset = -102;
    if(btnId == "churchesBtn") {
        element = 'churches';
    } else if(btnId == "eventsBtn") {
        element = 'events_section';
    } else if(btnId == "newsBtn") {
        element = 'news';
    } else if(btnId == "topBtn") {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    elementSelector = document.getElementById(element);

   
   const y = elementSelector.getBoundingClientRect().top + window.pageYOffset + yOffset;
   window.scrollTo({
       top: y,
       behavior: 'smooth'
   });
}