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